import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppHeader from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import { loadIngredientsAction } from 'services/actions/actions'

import styles from './app.module.css';

function App() {

  const ingredients = useSelector(store => store.ingredients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredientsAction())
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



