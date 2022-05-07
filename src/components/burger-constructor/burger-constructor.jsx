import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';

import image from 'images/orderIkon.png'
import {Button, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderedIngredient from 'components/ordered-ingredient/ordered-ingredient.jsx'
import Modal from 'components/modal/modal.jsx';
import OrderDetails from 'components/order-details/order-details.jsx';
import { ADD_INGREDIENT, DELETE_INGREDIENT, HIDE_ORDER_NUMBER, submitOrderAction } from '../../services/actions/actions';

import styles from './burger-constructor.module.css';

function BurgerConstructor () {

  const dispatch = useDispatch();

  const [{}, dropIngredient] = useDrop({
    accept: 'ingredient',
    drop(ingredient) {
      dispatch ({
        type: ADD_INGREDIENT,
        ingredient
      });
    },
  }); 

  const [{ bun, filling }, orderNumber] = useSelector(store => [store.burger, store.orderNumber]);

  const bunPrice = bun ? bun.price * 2 : 0;

  const orderSum = filling.reduce(
    (sum, ingredient) => sum + ingredient.price,
    0
  ) + bunPrice;
  
  const listIngridients = filling.map((ingredient, index) =>
        <OrderedIngredient 
          key={index}  
          ingredient={ingredient}
          index = {index}
          onClose={() => dispatch ({
              type: DELETE_INGREDIENT,
              index
            })
          }
        />
      );
  
  const ingredientIDs = [bun, ...filling, bun]
    .filter(ingredient => ingredient) // убираем из обрабатываемого списка undefined, пока булочка ещё не выбрана
    .map(ingredient => ingredient._id);

  
  
  const submitOrder = () => {
    dispatch(submitOrderAction(ingredientIDs))
  };

  const orderNumModal = (orderNumber && 
    <Modal  
      onClose={() => dispatch ({
        type: HIDE_ORDER_NUMBER
      })
      }> 
      <OrderDetails orderNum = {orderNumber}/> 
    </Modal>);

  
  return (
    
      <section ref={dropIngredient} className={styles['burger-constructor']}>
          
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

            {orderNumber && orderNumModal}

          </div>
        
      </section>
  
  );
}

export default BurgerConstructor;
