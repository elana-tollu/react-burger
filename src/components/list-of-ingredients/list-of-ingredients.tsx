import React from 'react';
import {forwardRef} from 'react';
import { Interface } from 'readline';
import { IIngredient } from 'utils/api';

import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import styles from './list-of-ingredients.module.css';

interface IListOfIngridientsProps {
  readonly ingredients: IIngredient[];
  readonly title: string;
}

const ListOfIngridients = forwardRef(function(props: IListOfIngridientsProps, ref){
    const listOfIngridients = props.ingredients
      .map((ingredient, index) => 
        <BurgerIngredient key={ingredient._id} ingredient={ingredient}/>
      );

  return (
        <section ref={ref}>
            <p className="text text_type_main-medium">
              {props.title}
            </p>
            <ul className={styles['card-list']}>
                {listOfIngridients}
            </ul> 
        </section>
    );
});

//todo use IIngredient
/* ListOfIngridients.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(
      INGREDIENT_TYPE
    )
  }; */

export default ListOfIngridients