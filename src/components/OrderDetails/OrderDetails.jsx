import React from 'react';
import styles from './OrderDetails.module.css'
import { DragIcon, CurrencyIcon, LockIcon }  from '@ya.praktikum/react-developer-burger-ui-components';
import image from '../../images/meat-Protostomia.png'

function OrderDetails (props: { ing: { image: string; name: string; price: number}; }) {
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
                    <CurrencyIcon type="primary" />
                </div>

                <LockIcon type="primary" />
            </div>

            
        </section>
    )
}

export default OrderDetails;