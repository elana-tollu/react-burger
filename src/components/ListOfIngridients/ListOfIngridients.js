import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListOfIngridients.module.css';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {forwardRef} from 'react';

const ListOfIngridients = forwardRef(function(props, ref){
    const listOfIngridients = props.ingredients.map((ing, index) =>
    <IngredientDetails key={index} ing={ing}/>
  );

  return (
        <section ref={ref}>
            <p className="text text_type_main-medium">
              {props.title}
            </p>
            <ul className={styles.cardList}>
                {listOfIngridients}
            </ul> 
        </section>
    );
});

ListOfIngridients.propTypes = {
    title: PropTypes.string.isRequired
  };

export default ListOfIngridients