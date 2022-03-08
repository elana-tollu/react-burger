import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderDetails.module.css'
import { DragIcon, CurrencyIcon, DeleteIcon }  from '@ya.praktikum/react-developer-burger-ui-components';

function OrderDetails (props) {
    return (
        <section className={styles.OrderDetails}>
            <DragIcon style={{ marginRight: '8px' }} type="primary" />

            <div className={styles.ingredient}>
                <img
                className={styles.ingredientImage}
                src={props.ing.image}
                alt=''
                /> 

                <p className={styles.ingredientName}>{props.ing.name}</p>

                <div className={styles.ingredientPrice}>
                    <span className='cost'>
                    <p style={{ marginRight: '8px' }} className="text text_type_digits-default">{props.ing.price}</p></span>
                    <CurrencyIcon style={{ textAlign: 'end' }} type="primary" />
                </div>

                <DeleteIcon type="primary" />
            </div>            
        </section>
    )
}

OrderDetails.propTypes = {
    ing: PropTypes.shape({
      image: PropTypes.string.isRequired, 
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  };

export default OrderDetails;