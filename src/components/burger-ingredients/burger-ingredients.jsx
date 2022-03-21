import React from 'react';
import PropTypes from 'prop-types';

import TabPanel from '../tab-panel/tab-panel';

import styles from './burger-ingredients.module.css';

function BurgerIngredients (props) {
  return (
    <section className={styles['burger-ingredients']}>
      <p className="text text_type_main-large">
        Соберите бургер
      </p>
      
      <div className="mb-10 mt-5">
        <TabPanel data = {props.data} />
      </div>
    </section>    
  );
}

BurgerIngredients.propTypes = {
  ing: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }).isRequired
};

export default BurgerIngredients;

