import { useState } from 'react';

import imageBun from '../../images/bun-01.png';
import image from '../../images/orderIkon.png'
import {Button, CurrencyIcon, LockIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {data} from '../../utils/data.js'
import OrderedIngredient from '../ordered-ingredient/ordered-ingredient.jsx'
import Modal from '../modal/modal.jsx';
import OrderDetails from '../order-details/order-details.jsx'

import styles from './burger-constructor.module.css';

function BurgerConstructor () {

  const listIngridients = data.map((ing, index) =>
        <OrderedIngredient key={ing._id} ing={ing}/>
      );
  
  const [orderNumOpen, setOrderNumOpen] = useState(false);
  const orderNumModal = (<Modal onClose={() => setOrderNumOpen (false)}> <OrderDetails/> </Modal>);

  return (
    <section className={styles['burger-constructor']}>

    <section className={styles['order-details']}>
        <div className={styles['top-ingredient']}>
            <img
            className={styles['ingredient-image']}
            src= {imageBun}
            alt=''
            /> 

            <p className={styles['ingredient-name']}>Флюоресцентная булка R2-D3 (верх)</p>

            <div className={styles['ingredient-price']}>
                <span className='cost'>
                <p className="text text_type_digits-default mr-2">20</p></span>
                <CurrencyIcon style={{ textAlign: 'end' }} type="primary" />
            </div>

            <LockIcon type="primary" />
        </div>            
      </section>

      <div className={styles['constructor-scroll']}>
        {listIngridients}
      </div>

      <section className={styles['order-details']}>
        <div className={styles['bottom-ingredient']}>
            <img
            className={styles['ingredient-image']}
            src= {imageBun}
            alt=''
            /> 

            <p className={styles['ingredient-name']}>Флюоресцентная булка R2-D3 (низ)</p>

            <div className={styles['ingredient-price']}>
                <span className='cost'>
                <p className="text text_type_digits-default mr-2">20</p></span>
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
