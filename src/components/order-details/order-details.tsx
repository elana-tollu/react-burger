import React, { FunctionComponent } from 'react';
import styles from './order-details.module.css';

interface IOrderDetailsProps {
    orderNum: number;
}

export const OrderDetails: FunctionComponent<IOrderDetailsProps> = (props) => {
    return (
        <section className={styles['order-details']}>
            <div className={styles.title} />

            <>
                <p className={styles['order-number']}>
                    <span className="text text_type_digits-large">{props.orderNum}</span></p>
                <p className="text text_type_main-default">идентификатор заказа</p>
                <div className={styles['icon-done']}></div>
                <p className="text text_type_main-small mb-2">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
            </>
        </section>
    )
}

export default OrderDetails;