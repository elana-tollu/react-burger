import React, { useEffect } from 'react';

import AppHeader from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import * as api from '../../utils/api.js';
import { AppContext } from '../../services/app-context.js'

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

  const bun = ingredients.find(ingredient => ingredient.type === 'bun')
  const filling = ingredients.filter(ingredient => ingredient.type !== 'bun')
  
  return (
    <div className={styles.app}>
      <AppHeader />

      <section className={styles.body}>

        <BurgerIngredients data = {ingredients}/>

        <AppContext.Provider value={{ bun, filling }}>
          <BurgerConstructor />
        </AppContext.Provider>

      </section>
    </div>
  );
}

export default App;



