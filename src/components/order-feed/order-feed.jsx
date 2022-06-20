import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styles from './order-feed.module.css';
import OrderCard from 'components/order-card/order-card';
import Statistics from 'components/statistics/statistics';
import {WS_CLOSE, WS_START } from 'services/actions/wsActions';

function OrderFeed () {
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch ({
            type: WS_START,
            url: 'wss://norma.nomoreparties.space/orders/all',
        })
        return () => {
            dispatch ({
                type: WS_CLOSE,
            })
        };
      }, []);
    
    const [orders, ingredients] = useSelector(store => [store.orders, store.ingredients]);

    if(ingredients.length === 0 || orders.length === 0) {
        return (
            <p className="text text_type_main-large">
                Информация о заказах в пути
            </p>
            )
    }

    const orderCards = orders.map(order => {
        const burgerIngredients = order.ingredients.map(id => ingredients.find(ingredient => ingredient._id === id));
        return (
            <Link 
                to={{
                    pathname: '/feed/' + order.number,
                    state: { background: location }
                }} 
                className={styles.link}
                key={order._id}
                >
                <OrderCard
                    orderId={order.number} 
                    orderDate={order.createdAt} 
                    orderTitle={order.name} 
                    orderIngredients={burgerIngredients}
                />
            </Link>
        );
    });
  
    return (
        <>
            <h1 className={styles.title}>
            <p className="text text_type_main-large">Лента заказов</p>
            </h1>

            <section className={styles['page-content']}>
                <section className={styles['constructor-scroll']}>
                    <ul className={styles.orderList}>
                        {orderCards}
                    </ul>
                </section>
                
                <section className={styles.statistics}>
                    <Statistics />
                </section>
            </section>
        </>
    )
}

export default OrderFeed;
