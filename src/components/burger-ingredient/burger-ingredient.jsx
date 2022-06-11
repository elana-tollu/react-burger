import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredient.module.css';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx'
import Modal from '../modal/modal.jsx';
import { HIDE_INGREDIENT, SHOW_INGREDIENT } from '../../services/actions/actions';
import {INGREDIENT_TYPE} from 'utils/types';

function BurgerIngredient (props) {
  const currentIngredient = useSelector(store => store.currentIngredient);
  const count = useSelector(store => [...store.burger.filling, store.burger.bun].filter(value => value && value._id === props.ingredient._id).length);
  const counterBadge = (
    <span className={styles.counter}>
      <p className="text text_type_digits-default">
          {count}
      </p></span>
    );

  const ingredientDetailsModal = (
    <Modal 
      title = 'Детали ингредиента'  
      onClose={() => dispatch ({
        type: HIDE_INGREDIENT}) 
      }> 
      <IngredientDetails ingredientId = {props.ingredient._id}/> 
    </Modal>
  );
  const dispatch = useDispatch();

  const [{opacity}, dragRef] = useDrag({
    type: 'ingredient',
    item: props.ingredient,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
      })
    });

  return (
    <section ref={dragRef} className={styles['burger-ingredient']} 
    style = {{opacity}}
      onClick={() => dispatch ({
          type: SHOW_INGREDIENT,
          ingredient: props.ingredient
        })
      }>

        {count > 0 && counterBadge}

        <img
        className={styles.image}
        src={props.ingredient.image}
        alt= {props.ingredient.name}
        />

        <div className={styles.price}>
            <p className="text text_type_digits-default mr-2">{props.ingredient.price}</p>
            <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{props.ingredient.name}</p>

        {currentIngredient === props.ingredient && ingredientDetailsModal}
    </section>
  );
}

BurgerIngredient.propTypes = {
  ingredient: INGREDIENT_TYPE.isRequired
};

export default BurgerIngredient;