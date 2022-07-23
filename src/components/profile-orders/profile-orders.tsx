import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import OrderCard from 'components/order-card/order-card';

import { wsClose, wsStart } from 'services/actions/wsActions';

import styles from './profile-orders.module.css';
import ProfileMenu from '../profile-menu/profile-menu';

import { refreshToken } from 'utils/api';
import { getTokens } from 'utils/auth';
import { useAppDispatch, useAppSelector } from 'services/hooks';

function ProfileOrders () {
    let location = useLocation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        refreshToken().then(() => {
            const accessToken = getTokens()?.accessToken?.slice(7);
            dispatch (wsStart('wss://norma.nomoreparties.space/orders?token=' + accessToken))
        });
        
        return () => {
            dispatch (wsClose())
        };
      }, []);
    
    const [orders, ingredients] = useAppSelector(store => [store.orders, store.ingredients]);

    if(ingredients.length === 0 || orders.length === 0) {
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
                    pathname: '/profile/orders/' + order.number,
                    state: { background: location }
                }} 
                className={styles.link}
                key={order._id}
                >
                <OrderCard
                    order={order} 
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

