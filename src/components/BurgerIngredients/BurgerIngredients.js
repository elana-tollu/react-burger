import React from 'react';
import styles from './BurgerIngredients.module.css';
import TabPanel from '../TabPanel/TabPanel';

function BurgerIngredients () {
  return (
    <section className={styles.BurgerIngredients}>
      <p className="text text_type_main-large">
        Соберите бургер
      </p>
      
      <div style={{ backgroundColor: '#4c4cff' }} className="mb-10 mt-5">
        <TabPanel></TabPanel>
      </div>
    </section>    
  );
}

export default BurgerIngredients;

