import React from 'react';
import styles from './IngredientDetails.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import image from '../../images/bun-01.jpg'

function IngredientDetails (props: { ing: { image: string; name: string; price: number}; }) {
  return (
    <section className={styles.IngredientDetails}>
        <span className={styles.counter}>
        <p className="text text_type_digits-default">
            1
        </p></span>
        <img
        className={styles.image}
        src={props.ing.image}
        alt=''
        />

        <div className={styles.price}>
            <span className='cost'>
            <p className="text text_type_digits-default">{props.ing.price}</p></span>
            <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{props.ing.name}</p>
    </section>
  );
}

export default IngredientDetails;