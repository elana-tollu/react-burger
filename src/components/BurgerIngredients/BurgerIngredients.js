import React from 'react';
import styles from './BurgerIngredients.module.css';
import TabPanel from '../TabPanel/TabPanel';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {data} from '../utils/data.js'

//function ingredientsOfType (ings, type) {
//  return ings.filter(element => element.type === type);
//};

function BurgerIngredients () {

  //const buns = ingredientsOfType(data, 'bun');
  //const mains = ingredientsOfType(data, 'main');
  //const sauces = ingredientsOfType(data, 'sauce');

  //const listBuns = buns.map((ing, index) =>
  //      <IngredientDetails key={index} ing={ing}/>
  //    );

  //const listMains = mains.map((ing, index) =>
  //    <IngredientDetails key={index} ing={ing}/>
  //  );

  //const listSauces = sauces.map((ing, index) =>
  //  <IngredientDetails key={index} ing={ing}/>
  //);

  return (
    <section className={styles.BurgerIngredients}>
      <p className="text text_type_main-large">
        Соберите бургер
      </p>
      
      <div style={{ backgroundColor: '#4c4cff' }} className="mb-10 mt-5">
        <TabPanel></TabPanel>
      </div>

      <div className={styles.ingredientsScroll}>

      </div>

    </section>    
  );
}

export default BurgerIngredients;

