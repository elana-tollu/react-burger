import React from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';


function App() {
  return (
    <div className={styles.app}>
      <AppHeader></AppHeader>

      <section className={styles.body}>

        <BurgerIngredients></BurgerIngredients>

        <BurgerConstructor></BurgerConstructor>

        
      </section>
    </div>
  );
}

export default App;
