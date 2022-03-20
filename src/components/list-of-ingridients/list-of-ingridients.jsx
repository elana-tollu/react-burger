import React from 'react';
import {forwardRef} from 'react';
import PropTypes from 'prop-types';

import BurgerIngredient from '../burger-ingredient/burger-ingredient';

import styles from './list-of-ingridients.module.css';

const ListOfIngridients = forwardRef(function(props, ref){
    const listOfIngridients = props.ingredients
      .map((ing, index) => 
        <BurgerIngredient key={ing.id} ing={ing}/>
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

ListOfIngridients.propTypes = {
    title: PropTypes.string.isRequired
  };

export default ListOfIngridients