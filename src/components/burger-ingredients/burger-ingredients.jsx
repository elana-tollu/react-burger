import React from 'react';

import TabPanel from '../tab-panel/tab-panel';

import styles from './burger-ingredients.module.css';

function BurgerIngredients (props) {
  console.log('BurgerIngredients', props)
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

export default BurgerIngredients;

