import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OrderCard from 'components/order-card/order-card';

import { userOrdersFeed } from 'utils/api';
import { UPDATE_ORDER_FEED, WS_CLOSE, WS_START } from 'services/actions/actions';

import styles from './profile-orders.module.css';
import ProfileMenu from '../profile-menu/profile-menu';

function ProfileOrders () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch ({
            type: WS_START,
            all: false,
        })
        return () => {
            dispatch ({
                type: WS_CLOSE,
            })
        };
      }, []);
    
    const [orders, ingredients] = useSelector(store => [store.orders, store.ingredients]);

    const orderCards = orders.map(order => {
        const burgerIngredients = order.ingredients.map(id=> ingredients.find(ingredient => ingredient._id === id));
        return (
            <Link 
                to={{
                    pathname: '/profile/orders/' + order._id
                }} 
                className={styles.link}
                key={order._id}
                >
                <OrderCard
                    orderId={order.number} 
                    orderDate={order.createdAt} 
                    orderTitle={order.name} 
                    orderStatus={order.status}
                    orderIngredients={burgerIngredients}
                />
            </Link>
        );
    });

    return (
        <section className={styles.body}>
            <ProfileMenu />

            <section className={styles['constructor-scroll']}>
                <ul className={styles.orderList}>
                    {orderCards}
                </ul>
            </section>
        </section>
    )
}

export default ProfileOrders;

