import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

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
