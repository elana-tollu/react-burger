import React from 'react';
import styles from './BurgerConstructor.module.css';
import image from '../../images/orderIkon.png'
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails'
import {data} from '../utils/data.js'

function BurgerConstructor () {

  const listIngridients = data.map((ing, index) =>
        <OrderDetails key={index} ing={ing}/>
      );

  return (
    <section className={styles.BurgerConstructor}>

      <div className={styles.ConstructorScroll}>
        {listIngridients}
      </div>

      <div className={styles.order}>
        <span className={styles.cost}>
          <p className="text text_type_digits-medium">
            610
          </p>
          <img
          className={styles.orderImage}
          src={image}
          alt=''
          />  
        </span>

        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

    </section>
  
  );
}

export default BurgerConstructor;
