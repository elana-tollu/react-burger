import React from 'react';
import PropTypes from 'prop-types';

import { DragIcon, ConstructorElement }  from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ordered-ingredient.module.css'

function OrderedIngredient (props) {
    return (
        <section className={styles['ordered-ingredient']}>
            <DragIcon style={{ marginRight: '8px' }} type="primary" />

            <ConstructorElement
                text={props.ingredient.name}
                price={props.ingredient.price}
                thumbnail={props.ingredient.image}
            />
                        
        </section>
    )
}

OrderedIngredient.propTypes = {
    ingredient: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired, 
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  };

export default OrderedIngredient;