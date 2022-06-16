import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './order-feed.module.css';
import OrderCard from 'components/order-card/order-card';
import Statistics from 'components/statistics/statistics';
import { allOrdersFeed } from 'utils/api';
import { UPDATE_ORDER_FEED } from 'services/actions/actions';

function OrderFeed () {
    const dispatch = useDispatch();
    useEffect(() => {
        const close = allOrdersFeed(({orders, total, totalToday}) => 
            dispatch({
                type: UPDATE_ORDER_FEED,
                orders, 
                total, 
                totalToday
            })
        );
        return () => {
           close();
        };
      }, []);
    
    const [orders, ingredients] = useSelector(store => [store.orders, store.ingredients]);

    const orderCards = orders.map(order => {
        const burgerIngredients = order.ingredients.map(id => ingredients.find(ingredient => ingredient._id === id));
        return (
            <OrderCard
                orderId={order.number} 
                orderDate={order.createdAt} 
                orderTitle={order.name} 
                orderIngredients={burgerIngredients}
                />
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
