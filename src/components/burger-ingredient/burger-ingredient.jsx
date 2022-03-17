import React from 'react';

import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredient.module.css';

function BurgerIngredient (props) {
  return (
    <section className={styles['burger-ingredient']}>
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
            <p className="text text_type_digits-default mr-2">{props.ing.price}</p>
            <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{props.ing.name}</p>
    </section>
  );
}

BurgerIngredient.propTypes = {
  ing: PropTypes.shape({
    image: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default BurgerIngredient;