import React from 'react';
import { useSelector } from 'react-redux';
import styles from './statistics.module.css';

function Statistics () {
    const [orders, total, totalToday] = useSelector(store => [store.orders, store.total, store.totalToday]);
    const ordersDone = orders
        .filter(order => order.status === 'done')
        .filter((order, index) => index <= 19)
        .map(order =>  <li className="text text_type_digits-default text_color_success mb-2">{order.number}</li>);

    const ordersInWork = orders
    .filter(order => order.status != 'done')
    .filter((order, index) => index <= 19)
    .map(order =>  <li className="text text_type_digits-default mb-2">{order.number}</li>);
    
    return (   
        <section className={styles.statistics}>
            
            <div className={styles.ordersBoard}>
                <div className={styles.orders}>
                    <p className="text text_type_main-medium">Готовы:</p>
                    <ul className={styles.ordersNumbers}>
                        {ordersDone}
                    </ul>
                </div>
                <div className={styles.orders}>
                    <p className="text text_type_main-medium">В работе:</p>
                    <ul className={styles.ordersNumbers}>
                        {ordersInWork}
                    </ul>
                </div>
            </div>

            <div className={styles.ordersDone}>
                    <p className="text text_type_main-medium">Выполнено за все время:</p>
                <p className="text text_type_digits-large">{total}</p>
                </div>

                <div className={styles.ordersDone}>
                    <p className="text text_type_main-medium">Выполнено за сегодня:</p>
                    <p className="text text_type_digits-large">{totalToday}</p>
                </div>
        </section>
    )
}

export default Statistics;