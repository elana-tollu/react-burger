import React from 'react';
import styles from './BurgerConstructor.module.css';
import image from '../../images/orderIkon.png'
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails'
import {data} from '../utils/data.js'
import { CurrencyIcon, LockIcon }  from '@ya.praktikum/react-developer-burger-ui-components';
import imageBun from '../../images/bun-01.png';


function BurgerConstructor () {

  const listIngridients = data.map((ing, index) =>
        <OrderDetails key={index} ing={ing}/>
      );

  return (
    <section className={styles.BurgerConstructor}>

    <section className={styles.OrderDetails}>
        <div className={styles.topIngredient}>
            <img
            className={styles.ingredientImage}
            src= {imageBun}
            alt=''
            /> 

            <p className={styles.ingredientName}>Флюоресцентная булка R2-D3 (верх)</p>

            <div className={styles.ingredientPrice}>
                <span className='cost'>
                <p style={{ marginRight: '8px' }} className="text text_type_digits-default">20</p></span>
                <CurrencyIcon style={{ textAlign: 'end' }} type="primary" />
            </div>

            <LockIcon type="primary" />
        </div>            
      </section>

      <div className={styles.ConstructorScroll}>
        {listIngridients}
      </div>

      <section className={styles.OrderDetails}>
        <div className={styles.bottomIngredient}>
            <img
            className={styles.ingredientImage}
            src= {imageBun}
            alt=''
            /> 

            <p className={styles.ingredientName}>Флюоресцентная булка R2-D3 (верх)</p>

            <div className={styles.ingredientPrice}>
                <span className='cost'>
                <p style={{ marginRight: '8px' }} className="text text_type_digits-default">20</p></span>
                <CurrencyIcon style={{ textAlign: 'end' }} type="primary" />
            </div>

            <LockIcon type="primary" />
        </div>            
      </section>

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
