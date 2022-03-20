import React, { useEffect } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import styles from './app.module.css';

function App() {
  let [ingredients, setIngredients] = React.useState([]);

  useEffect(() => {
    loadIngredientCards()
    .then( ingredientsData => {
      setIngredients(ingredientsData);
  })}, []);

  return (
    <div className={styles.app}>
      <AppHeader />

      <section className={styles.body}>

        <BurgerIngredients data = {ingredients}/>

        <BurgerConstructor />

        
      </section>
    </div>
  );
}

export default App;



const baseUrl = 'https://norma.nomoreparties.space/api/ingredients';

function request( method, data ) {
  return fetch(`${baseUrl}`, {
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

function loadIngredientCards() {
  return request('GET')
  .then((cards) => {
      return cards.data.map((card) => ({
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
