const baseUrl = 'https://norma.nomoreparties.space/api/';

function request( method, endpoint, data ) {
  return fetch(`${baseUrl}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  }).then((response) => {
      if (response.ok) {
          return response.json();
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

export function login(email, password) {
  return request('POST', 'auth/login', {email, password});
}

export function register(name, email, password) {
  return request('POST', 'auth/register', {name, email, password});
}