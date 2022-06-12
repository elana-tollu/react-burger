import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from "react-router-dom";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredient.module.css';
import {INGREDIENT_TYPE} from 'utils/types';

function BurgerIngredient (props) {
  const count = useSelector(store => [...store.burger.filling, store.burger.bun].filter(value => value && value._id === props.ingredient._id).length);
  const counterBadge = (
    <span className={styles.counter}>
      <p className="text text_type_digits-default">
          {count}
      </p></span>
    );

  const [{opacity}, dragRef] = useDrag({
    type: 'ingredient',
    item: props.ingredient,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
      })
    });

  let location = useLocation();

  return (
    <Link className={styles.link}
    key={props.ingredient._id}
    to={{
      pathname: `/ingredients/${props.ingredient._id}`,
      state: { background: location }
    }}
    >
      <section ref={dragRef} className={styles['burger-ingredient']} 
        style = {{opacity}}>

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
      </section>
    </Link>
  );
}

BurgerIngredient.propTypes = {
  ingredient: INGREDIENT_TYPE.isRequired
};

export default BurgerIngredient;