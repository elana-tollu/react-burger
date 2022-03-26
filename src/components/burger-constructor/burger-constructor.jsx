import { useState } from 'react';

import imageBun from '../../images/bun-01.png';
import image from '../../images/orderIkon.png'
import {Button, CurrencyIcon, LockIcon, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {data} from '../../utils/data.js'
import OrderedIngredient from '../ordered-ingredient/ordered-ingredient.jsx'
import Modal from '../modal/modal.jsx';
import OrderDetails from '../order-details/order-details.jsx'

import styles from './burger-constructor.module.css';

function BurgerConstructor () {

  const listIngridients = data.map((ingredient, index) =>
        <OrderedIngredient key={ingredient._id} ingredient={ingredient}/>
      );
  
  const [orderNumOpen, setOrderNumOpen] = useState(false);
  const orderNumModal = (<Modal onClose={() => setOrderNumOpen (false)}> <OrderDetails/> </Modal>);

  return (
    <section className={styles['burger-constructor']}>

      <section className={styles['order-details']}>

        <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={imageBun}
        />
        
      </section>

      <div className={styles['constructor-scroll']}>
        {listIngridients}
      </div>

      <section className={styles['order-details']}>

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={imageBun}
        />
                   
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

        <Button type="primary" size="large"
          onClick={() => setOrderNumOpen (true)}>
          Оформить заказ
        </Button>

        {orderNumOpen && orderNumModal}

      </div>

    </section>
  
  );
}

export default BurgerConstructor;
