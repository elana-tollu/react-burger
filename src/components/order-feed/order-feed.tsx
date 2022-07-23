import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './order-feed.module.css';
import OrderCard from 'components/order-card/order-card';
import Statistics from 'components/statistics/statistics';
import {wsClose, wsStart } from 'services/actions/wsActions';
import { useAppDispatch, useAppSelector } from 'services/hooks';

function OrderFeed () {
    const location = useLocation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch (wsStart('wss://norma.nomoreparties.space/orders/all'))
        return () => {
            dispatch (wsClose())
        };
      }, []);
    
    const orders = useAppSelector(store => store.orders);

    if(orders.length === 0) {
        return (
            <p className="text text_type_main-large">
                Информация о заказах в пути
            </p>
            )
    }

    const orderCards = orders.map(order => {
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
                    order = {order} 
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
