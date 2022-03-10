import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />

      <section className={styles.body}>

        <BurgerIngredients />

        <BurgerConstructor />

        
      </section>
    </div>
  );
}

export default App;
