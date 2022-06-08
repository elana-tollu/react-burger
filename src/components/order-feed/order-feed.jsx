import React from 'react';
import styles from './order-feed.module.css';

function OrderFeed () {
    return (
        <>
            <h1 className={styles.title}>
            <p className="text text_type_main-large">Лента заказов</p>
            </h1>

            <section className={styles['page-content']}>
                <section className={styles['constructor-scroll']}></section>
                <section></section>
            </section>
        </>
    )
}

export default OrderFeed;