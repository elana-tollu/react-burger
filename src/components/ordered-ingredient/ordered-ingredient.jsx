import React from 'react';
import PropTypes from 'prop-types';

import { DragIcon, CurrencyIcon, DeleteIcon }  from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ordered-ingredient.module.css'

function OrderedIngredient (props) {
    return (
        <section className={styles['ordered-ingredient']}>
            <DragIcon style={{ marginRight: '8px' }} type="primary" />

            <div className={styles.ingredient}>
                <img
                className={styles['ingredient-image']}
                src={props.ing.image}
                alt=''
                /> 

                <p className={styles['ingredient-name']}>{props.ing.name}</p>

                <div className={styles['ingredient-price']}>
                    <span className='cost'>
                    <p className="text text_type_digits-default mr-2">{props.ing.price}</p></span>
                    <CurrencyIcon style={{ textAlign: 'end' }} type="primary" />
                </div>

                <DeleteIcon type="primary" />
            </div>            
        </section>
    )
}

OrderedIngredient.propTypes = {
    ing: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired, 
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  };

export default OrderedIngredient;