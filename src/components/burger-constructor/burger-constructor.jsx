import { useState,  useContext} from 'react';

import image from 'images/orderIkon.png'
import {Button, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderedIngredient from 'components/ordered-ingredient/ordered-ingredient.jsx'
import Modal from 'components/modal/modal.jsx';
import OrderDetails from 'components/order-details/order-details.jsx';
import { AppContext } from 'services/app-context.js'
import * as api from 'utils/api.js';

import styles from './burger-constructor.module.css';

function BurgerConstructor () {

  const { bun, filling } = useContext(AppContext);

  const bunPrice = bun ? bun.price * 2 : 0;

  const orderSum = filling.reduce(
    (sum, ingredient) => sum + ingredient.price,
    0
  ) + bunPrice;
  
  const listIngridients = filling.map((ingredient, index) =>
        <OrderedIngredient key={ingredient._id} ingredient={ingredient}/>
      );
  
  const [orderNumOpen, setOrderNumOpen] = useState(false);

  const [orderNum, setOrderNum] = useState();
  const ingredientIDs = [bun, ...filling, bun]
    .filter(ingredient => ingredient) // убираем из обрабатываемого списка undefined, пока булочка ещё не выбрана
    .map(ingredient => ingredient._id);

  const submitOrder = () => {
    api.submitOrder(ingredientIDs)
      .then(setOrderNum)
      .catch(alert);
    setOrderNumOpen (true);
  };
 
  const orderNumModal = (orderNum && <Modal  onClose={() => setOrderNumOpen (false)}> <OrderDetails orderNum = {orderNum}/> </Modal>);

  
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
            onClick={submitOrder}>
            Оформить заказ
          </Button>

          {orderNumOpen && orderNumModal}

        </div>

      </section>
  
  );
}

export default BurgerConstructor;
