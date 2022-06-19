import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import OrderCard from 'components/order-card/order-card';

import { WS_CLOSE, WS_START } from 'services/actions/actions';

import styles from './profile-orders.module.css';
import ProfileMenu from '../profile-menu/profile-menu';

import { refreshToken } from 'utils/api';
import { getTokens } from 'utils/auth';

function ProfileOrders () {
    const dispatch = useDispatch();
    useEffect(() => {
        refreshToken().then(() => {
            const accessToken = getTokens()?.accessToken?.slice(7);
            dispatch ({
                type: WS_START,
                url: 'wss://norma.nomoreparties.space/orders?token=' + accessToken,
            })
        });
        
        return () => {
            dispatch ({
                type: WS_CLOSE,
            })
        };
      }, []);
    
    const [orders, ingredients] = useSelector(store => [store.orders, store.ingredients]);

    let location = useLocation();
    const orderCards = orders.map(order => {
        const burgerIngredients = order.ingredients.map(id=> ingredients.find(ingredient => ingredient._id === id));
        return (
            <Link 
                to={{
                    pathname: '/profile/orders/' + order._id,
                    state: { background: location }
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

