import { useState,  useContext} from 'react';

import imageBun from '../../images/bun-01.png';
import image from '../../images/orderIkon.png'
import {Button, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderedIngredient from '../ordered-ingredient/ordered-ingredient.jsx'
import Modal from '../modal/modal.jsx';
import OrderDetails from '../order-details/order-details.jsx';
import { AppContext } from '../../services/app-context.js'


import styles from './burger-constructor.module.css';

function BurgerConstructor () {

  const { bun, filling } = useContext(AppContext);
  
  const listIngridients = filling.map((ingredient, index) =>
        <OrderedIngredient key={ingredient._id} ingredient={ingredient}/>
      );
  
  const [orderNumOpen, setOrderNumOpen] = useState(false);
  const orderNumModal = (<Modal onClose={() => setOrderNumOpen (false)}> <OrderDetails/> </Modal>);

  const bunPrice = bun ? bun.price * 2 : 0;

  const orderSum = filling.reduce(
    (sum, ingredient) => sum + ingredient.price,
    0
  ) + bunPrice;
  
  return (
    
      <section className={styles['burger-constructor']}>

        <section className={styles['order-details']}>

          {bun && <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
          />}
          
        </section>

        <div className={styles['constructor-scroll']}>
          {listIngridients}
        </div>

        <section className={styles['order-details']}>

          {bun && <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
          />}
                    
        </section>

        <div className={styles.order}>
          <span className={styles.cost}>
            <p className="text text_type_digits-medium mr-2">
              {orderSum}
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
