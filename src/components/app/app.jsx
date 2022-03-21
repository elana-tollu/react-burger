import React, { useEffect } from 'react';

import AppHeader from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';

import styles from './app.module.css';

function App() {
  const [ingredients, setIngredients] = React.useState([]);

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

function loadIngredientCards() {
  return request('GET', 'ingredients')
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
  })
  .catch(alert);
}
