import { setTokens, getTokens, deleteTokens} from 'utils/auth';

const host = 'norma.nomoreparties.space';
const wsBaseUrl = `wss://${host}/`;
const httpBaseUrl = `https://${host}/api/`;

function request( method, endpoint, data ) {
  return fetch(`${httpBaseUrl}${endpoint}`, {
      method,
      headers: {
        'Authorization': getTokens()?.accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  }).then((response) => {
      if (response.ok) {
          return response.json();
      } else if (response.status === 403) {
        return refreshToken()
          .then(() => request( method, endpoint, data ));
      } else {
          return Promise.reject(
              `Ошибка: ${response.status} ${response.statusText}`
          );
      }
  });
}

export function loadIngredientCards() {
  return request('GET', 'ingredients')
    .then(cards => {
        return cards.data;
    });
}

export function submitOrder(ingredientIDs) {
    return request('POST', 'orders', {ingredients: ingredientIDs})
      .then(order => order.order.number);
}


//получаем оба токена
export function login(email, password) {
  return request('POST', 'auth/login', {email, password})
  .then(({user, accessToken, refreshToken}) => {
    setTokens ({accessToken, refreshToken});
    return {user};
  });
}

//получаем оба токена
export function register(name, email, password) {
  return request('POST', 'auth/register', {name, email, password})
  .then(({user, accessToken, refreshToken}) => {
    setTokens ({accessToken, refreshToken});
    return {user};
  });
}

export function forgotPassword(email) {
  return request('POST', 'password-reset', {email});
}

//
export function resetPassword(password, token) {
  return request('POST', 'password-reset/reset', {password, token});
}

//нужен refresh токен
// удаляем оба токена
export function logout() {
  return request('POST', 'auth/logout', {token : getTokens()?.refreshToken})
  .then(() => {
    deleteTokens();
  }) ;
}

//нужен access токен
export function getProfile() {
  return request('GET', 'auth/user');
}

//нужен access токен
export function updateProfile(name, email, password) {
  return request('PATCH', 'auth/user', {name, email, password:(password ? password : null)})
  .then(({user}) => {
    return {
      name: user.name,
      email: user.email
    };
  });
}

//нужен refresh токен
//получаем оба токена
function refreshToken() {
  return request('POST', 'auth/token', {token : getTokens()?.refreshToken})
  .then(({accessToken, refreshToken}) => {
    setTokens ({accessToken, refreshToken});
  }) ;
}

export function allOrdersFeed(onData) {
  const ws = new WebSocket(wsBaseUrl + 'orders/all');
  ws.onmessage = (event) => {
    let data = JSON.parse(event.data);
    onData(data);
  }
  return () => ws.close();
}

export function userOrdersFeed(onData) {
  const accessToken = getTokens()?.accessToken?.slice(7);
  const ws = new WebSocket(wsBaseUrl + 'orders?token=' + accessToken);
  ws.onmessage = (event) => {
    let data = JSON.parse(event.data);
    onData(data);
  }
  return () => ws.close();
}