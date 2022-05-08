import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import AppHeader from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import { loadIngredientsAction } from 'services/actions/actions'

import styles from './app.module.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredientsAction())
  }, []);
  
  return (
    <div className={styles.app}>
      <AppHeader />

      <section className={styles.body}>
        <DndProvider backend={HTML5Backend}>

          <BurgerIngredients />

          <BurgerConstructor />
        </DndProvider>
      </section>
    </div>
  );
}

export default App;



