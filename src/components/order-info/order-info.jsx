import React from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-info.module.css';

function OrderInfo ({orderId, orderDate, orderTitle, orderIngredients, orderStatus}) { 

    const ingredientCounts = countIngredients(orderIngredients);
    const uniqueIngredients = Object.keys(ingredientCounts).map(id => orderIngredients.find( ing => ing._id === id));
    
    const ingredients = uniqueIngredients.map(ingredient => 
        <li className={styles.orderIngredient} key = {ingredient._id}>
            <img src={ingredient.image_mobile} className={styles.image}/>
            <p className="text text_type_main-default text_color_primary pr-8">{ingredient.name}</p>
            <div className={styles.price}>
                <p className="text text_type_digits-default">{ingredientCounts[ingredient._id]} x {ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
        </li>
    );
    
    const orderPrice = orderIngredients.reduce((price, ingredient) => price + ingredient.price, 0);

    return (
      <section className={styles.modal}>
        <p className="text text_type_digits-default mb-10">#{orderId}</p>
        <div className={styles.info}>
            <p className="text text_type_main-medium mb-3">{orderTitle}</p>
            <p className="text text_type_main-default text_color_success mb-15">{formatOrderStatus(orderStatus)}</p>
            <p className="text text_type_main-medium">Состав:</p>
        </div>
        <section className={styles['constructor-scroll']}>
            <ul className={styles.order}>
                {ingredients}
            </ul>
        </section>
        
        <div className={styles.orderDetails}>
            <p className="text text_type_main-default text_color_inactive">{orderDate}</p>
            <div className={styles.price}>
                <p className="text text_type_digits-default mr-2">{orderPrice}</p>
                <CurrencyIcon type="primary" />
            </div>
        </div>
      </section>
    );
  };
  
export default OrderInfo;

function formatOrderStatus(orderStatus) {
    if (orderStatus === 'done') {
        return 'Выполнен';
    } 
    if (orderStatus === 'created') {
        return 'Создан';
    }
    if (orderStatus === 'pending') {
        return 'Готовится';
    }
    if (orderStatus === 'cancel') {
        return 'Отменен';
    } 
    return 'Неизвестный статус: ' + orderStatus;
}

function countIngredients(ingredients) {
    let result = {};
    for (const ingredient of ingredients) {
        const id = ingredient._id;
        const currentCount = result[id];
        if (currentCount > 0) {
            result[id] = currentCount + 1;
        } else {
            result[id] = 1;
        }
    }
    return result;
}