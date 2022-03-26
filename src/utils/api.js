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
        return cards.data.map(card => ({
            id: card._id,
            name: card.name,
            type:  card.type,
            proteins:  card.proteins,
            fat:  card.fat,
            carbohydrates:  card.carbohydrates,
            calories:  card.calories,
            price:  card.price,
            image:  card.image,
        }));
    });
}
