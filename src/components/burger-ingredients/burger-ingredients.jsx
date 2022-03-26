import React from 'react';
import PropTypes from 'prop-types';

import TabPanel from '../tab-panel/tab-panel';

import styles from './burger-ingredients.module.css';

function BurgerIngredients (props) {
  return (
      <section className={styles['burger-ingredients']}>
        <h1 className="text text_type_main-large">
          Соберите бургер
        </h1>
        
        <div className="mb-10 mt-5">
          <TabPanel data = {props.data} />
        </div>
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

