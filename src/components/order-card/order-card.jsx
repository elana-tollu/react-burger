import React from 'react';
import { formatRelative, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './order-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderCard ({orderId, orderDate, orderTitle, orderIngredients, orderStatus}) {
    let ingredientImages = orderIngredients.map((ingredient, index) => <img src={ingredient.image_mobile} className={styles.image} key={orderId + '_' + index}/>);
    const ingredientCount = ingredientImages.length;
    if (ingredientCount > 6) {
        ingredientImages = ingredientImages.slice(0, 6);
        const moreIngredientsCount = ingredientCount - 5;
        ingredientImages.push(<p key={orderId + '_count'}>+ {moreIngredientsCount}</p>);
    }
    ingredientImages.reverse();
    const orderPrice = orderIngredients.reduce((price, ingredient) => price + ingredient.price, 0);

    return (
        <li className={styles.orderCard}>
            <div className={styles.orderInfo}>
                <p className="text text_type_digits-default">#{orderId}</p>
                <p className="text text_type_main-default text_color_inactive">{formatDate(orderDate)}</p>
            </div>
            
            <div className={styles.orderName}>
                <p className="text text_type_main-medium">{orderTitle}</p>
            </div>

            {orderStatus && <p className="text text_type_main-default text_color_success mb-15">{formatOrderStatus(orderStatus)}</p>}
            
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

function formatDate(date) {
    return formatRelative(parseISO(date), new Date(), {locale: ru});
}

function formatOrderStatus(orderStatus) {
    if (orderStatus === 'done') {
        return '????????????????';
    } 
    if (orderStatus === 'created') {
        return '????????????';
    }
    if (orderStatus === 'pending') {
        return '??????????????????';
    }
    if (orderStatus === 'cancel') {
        return '??????????????';
    } 
    return '?????????????????????? ????????????: ' + orderStatus;
}