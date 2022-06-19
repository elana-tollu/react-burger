import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import BurgerConstructor from 'components/burger-constructor/burger-constructor.jsx';
import BurgerIngredients from 'components/burger-ingredients/burger-ingredients.jsx';

import styles from './home.module.css';

function HomePage () {   
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