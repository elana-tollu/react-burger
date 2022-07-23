import React, { FunctionComponent } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './order-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IOrder } from 'utils/api';
import { IFeedOrder, OrderStatus } from 'services/actions/wsActions';
import { useAppSelector } from 'services/hooks';

interface IOrderCardProps {
    readonly order: IFeedOrder;
}

const OrderCard: FunctionComponent <IOrderCardProps> = (props) => {
    const ingredients = useAppSelector(store => store.ingredients);
    const burgerIngredients = props.order.ingredients.map(id => ingredients.find(ingredient => ingredient._id === id));
    let ingredientImages = burgerIngredients.map((ingredient, index) => 
        ingredient && <img src={ingredient.image_mobile} className={styles.image} key={props.order._id + '_' + index}/>
    );
    const ingredientCount = ingredientImages.length;
    if (ingredientCount > 6) {
        ingredientImages = ingredientImages.slice(0, 6);
        const moreIngredientsCount = ingredientCount - 5;
        ingredientImages.push(<p key={props.order._id + '_count'}>+ {moreIngredientsCount}</p>);
    }
    ingredientImages.reverse();
    const orderPrice = burgerIngredients.reduce(
        (price, ingredient) => ingredient ? (price + ingredient.price) : price, 
        0
    );

    return (
        <li className={styles.orderCard}>
            <div className={styles.orderInfo}>
                <p className="text text_type_digits-default">#{props.order._id}</p>
                <p className="text text_type_main-default text_color_inactive">{formatDate(props.order.createdAt)}</p>
            </div>
            
            <div className={styles.orderName}>
                <p className="text text_type_main-medium">{props.order.name}</p>
            </div>

            {props.order.status && <p className="text text_type_main-default text_color_success mb-15">{formatOrderStatus(props.order.status)}</p>}
            
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

function formatDate(date: string) {
    return formatRelative(parseISO(date), new Date(), {locale: ru});
}

function formatOrderStatus(orderStatus: OrderStatus) {
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