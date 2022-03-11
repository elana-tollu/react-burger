import React from 'react';
import {CloseIcon, CheckMarkIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-details.module.css';


function OrderDetails () {
    return (
        <section className={styles['order-details']}>
            <div className={styles['button-close']}>
                <CloseIcon type="primary" /></div>
            <p className={styles['order-number']}>
                <span className="text text_type_digits-large">034536</span></p>
            <p className="text text_type_main-default">идентификатор заказа</p>
            <div className={styles['icon-done']}></div>
            <p className="text text_type_main-small mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </section>
    )
}

export default OrderDetails;