import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import TabPanel from '../tab-panel/tab-panel';

import styles from './burger-ingredients.module.css';

function BurgerIngredients () {
  return (
      <section className={styles['burger-ingredients']}>
        <DndProvider backend={HTML5Backend}>
          <h1 className="text text_type_main-large">
            Соберите бургер
          </h1>
          
          <div className="mb-10 mt-5">
            <TabPanel />
          </div>
        </DndProvider>
      </section>   
  );
}

//todo use IIngredient
/* BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(
    INGREDIENT_TYPE
  )
}; */

export default BurgerIngredients;

