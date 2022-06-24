import { setTokens, getTokens, deleteTokens} from 'utils/auth';

const host = 'norma.nomoreparties.space';
const httpBaseUrl = `https://${host}/api/`;

function request<Req, Res>( method: string, endpoint: string, data?: Req ): Promise<Res> {
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

type TIngredient = {
  _id: string;
  image: string; 
  price: number;
  name: string;
};

type TIngredientResponse = {
  data: TIngredient[];
};

export function loadIngredientCards(): Promise<TIngredient[]> {
  return request<void, TIngredientResponse>('GET', 'ingredients')
    .then(cards => {
        return cards.data;
    });
}

type TOrder = {
  number: string;
  //todo
};

type TOrderResponse = {
  //todo
};

export function loadOrder(orderNumber: string): Promise<TOrderResponse> {
  return request<void, TOrderResponse>('GET', 'orders/' + orderNumber);
}

type TSubmitOrderRequest = {
  ingredients: string[];
};

type TSubmitOrderResponse = {
  order: TOrder;
};

export function submitOrder(ingredientIDs: string[]) {
    return request<TSubmitOrderRequest, TSubmitOrderResponse>('POST', 'orders', {ingredients: ingredientIDs})
      .then(orderResponse => orderResponse.order.number);
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

type TProfile = {
  //todo
};

type TProfileResponse = {
  //todo
};

export function getProfile(): Promise<TProfile> {
  return request<void, TProfileResponse>('GET', 'auth/user');
}

export function updateProfile(name, email, password) {
  return request('PATCH', 'auth/user', {name, email, password:(password ? password : null)})
  .then(({user}) => {
    return {
      name: user.name,
      email: user.email
    };
  });
}

export function refreshToken() {
  return request('POST', 'auth/token', {token : getTokens()?.refreshToken})
  .then(({accessToken, refreshToken}) => {
    setTokens ({accessToken, refreshToken});
  });
}
