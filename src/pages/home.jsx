import React, {useEffect} from 'react';

import { useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import AppHeader from 'components/app-header/app-header.jsx';
import BurgerConstructor from 'components/burger-constructor/burger-constructor.jsx';
import BurgerIngredients from 'components/burger-ingredients/burger-ingredients.jsx';

import { loadIngredientsAction } from 'services/actions/actions';

import styles from './home.module.css';


function HomePage () {  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredientsAction())
  }, []);
  
  return (
    <div className={styles.app}>
        <section className={styles.body}>
          <DndProvider backend={HTML5Backend}>

            <BurgerIngredients />

            <BurgerConstructor />
          </DndProvider>
        </section>
    </div>
  );
};

export default HomePage;