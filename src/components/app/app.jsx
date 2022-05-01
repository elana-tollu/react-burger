import React, { useEffect } from 'react';

import AppHeader from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import * as api from '../../utils/api.js';

import styles from './app.module.css';

function App() {
  const [ingredients, setIngredients] = React.useState([]);

  useEffect(() => {
    api.loadIngredientCards()
      .then(ingredientsData => {
        setIngredients(ingredientsData);
      })
      .catch(alert)
  }, []);
  
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



