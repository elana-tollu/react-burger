import React from 'react';

import TabPanel from '../TabPanel/TabPanel';

import styles from './BurgerIngredients.module.css';

function BurgerIngredients () {
  return (
    <section className={styles.BurgerIngredients}>
      <p className="text text_type_main-large">
        Соберите бургер
      </p>
      
      <div className="mb-10 mt-5">
        <TabPanel />
      </div>
    </section>    
  );
}

export default BurgerIngredients;

