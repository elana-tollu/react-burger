import {Link, useLocation} from 'react-router-dom';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';

import image from 'images/orderIkon.png'
import {Button, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderedIngredient from 'components/ordered-ingredient/ordered-ingredient.jsx'
import Modal from 'components/modal/modal.jsx';
import OrderDetails from 'components/order-details/order-details.jsx';
import { ADD_INGREDIENT, DELETE_INGREDIENT, HIDE_ORDER_NUMBER, submitOrderAction } from '../../services/actions/actions';
import {isAuthenticated} from 'utils/auth';

import styles from './burger-constructor.module.css';
import { useAppDispatch, useAppSelector } from 'services/hooks';

function BurgerConstructor () {

  let {pathname} = useLocation();

  const dispatch = useAppDispatch();

  const [{}, dropIngredient] = useDrop({
    accept: 'ingredient',
    drop(ingredient) {
      const uuid = uuidv4();
      dispatch (
        // addIngredient(ingredient)
        {
        type: ADD_INGREDIENT,
        ingredient: {...ingredient, uuid}
      });
    },
  }); 

  const [{ bun, filling }, orderNumber, isSubmittingOrder] = useAppSelector(store => [store.burger, store.orderNumber, store.isSubmittingOrder]);

  const bunPrice = bun ? bun.price * 2 : 0;

  const orderSum = filling.reduce(
    (sum, ingredient) => sum + ingredient.price,
    0
  ) + bunPrice;
  
  const listIngridients = filling.map((ingredient, index) =>
        <OrderedIngredient 
          key={ingredient.uuid}  
          ingredient={ingredient}
          index = {index}
          onClose={() => dispatch (
            // deleteIngredient(ingredient, index)
            {
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

          {isAuthenticated() ? 
            isSubmittingOrder ? 
            <Button type="primary" size="large" disabled>
              Заказ обрабатывается...
            </Button>
            :
            <Button type="primary" size="large" disabled={!bun}
              onClick={submitOrder}>
              Оформить заказ
            </Button>
            : <Link  to={{
              pathname: '/login',
              state: { from: pathname }
            }}>
                <Button type="primary" size="large" disabled={!bun}>
                  Войдите
                </Button>
              </Link>
            }

            { orderNumber && orderNumModal}

          </div>
        
      </section>
  
  );
}

export default BurgerConstructor;
