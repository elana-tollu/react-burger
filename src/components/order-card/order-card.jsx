import React from 'react';
import styles from './order-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderCard ({orderId, orderDate, orderTitle, orderIngredients, orderStatus}) {
    const ingredientImages = orderIngredients.map(ingredient => <img src={ingredient.image_mobile} className={styles.image}/>);
    const orderPrice = orderIngredients.reduce((price, ingredient) => price + ingredient.price, 0);

    return (
        <li className={styles.orderCard}>
            <div className={styles.orderInfo}>
                <p className="text text_type_digits-default">#{orderId}</p>
                <p className="text text_type_main-default text_color_inactive">{orderDate}</p>
            </div>
            
            <div className={styles.orderName}>
                <p className="text text_type_main-medium">{orderTitle}</p>
            </div>
            
            <div className={styles.orderDetails}>
                <div className={styles.orderComponents}>
                    {ingredientImages}
                </div>
                
                <div className={styles.price}>
                    <p className="text text_type_digits-default mr-2">{orderPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </li>
    )
}

export default OrderCard;