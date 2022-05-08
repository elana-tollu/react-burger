import React from 'react';
import PropTypes from 'prop-types';
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

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired, 
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired
    })
  )
};

export default BurgerIngredients;

