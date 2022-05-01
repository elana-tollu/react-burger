import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredient.module.css';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx'
import Modal from '../modal/modal.jsx';
import { HIDE_INGREDIENT, SHOW_INGREDIENT } from '../../services/actions/actions';

function BurgerIngredient (props) {
  const currentIngredient = useSelector(store => store.currentIngredient);
  const ingredientDetailsModal = (
    <Modal 
      title = 'Детали ингредиента'  
      onClose={() => dispatch ({
        type: HIDE_INGREDIENT}) 
      }> 
      <IngredientDetails ingredient = {props.ingredient}/> 
    </Modal>
  );
  const dispatch = useDispatch();

  return (
    <section className={styles['burger-ingredient']}
      onClick={() => dispatch ({
          type: SHOW_INGREDIENT,
          ingredient: props.ingredient
        })
      }>
        <span className={styles.counter}>
        <p className="text text_type_digits-default">
            1
        </p></span>
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
  ingredient: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }).isRequired
};

export default BurgerIngredient;