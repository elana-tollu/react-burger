import React from 'react';
import PropTypes from 'prop-types';

import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import main from '../../images/meat-01.png';

import styles from './ingredient-details.module.css';


function IngredientDetails (props) {
    return (
        <section className={styles['ingredient-details']}>
            
            
            <>
                <img
                    className={styles.image}
                    src= {main} // {props.ing.image}
                    alt=''
                /> 

                <p className="text text_type_main-medium mt-4 p-1">Биокотлета из марсианской Магнолии</p> 

                <div className="text text_type_main-default text_color_inactive mt-8">
                    <ul className={styles.nutritions}>
                        <li>Калории,ккал
                            <p className="mt-2">244,4</p>
                        </li> 
                        <li>Белки, г
                            <p className="mt-2">12,2</p>
                        </li>
                        <li>Жиры, г
                            <p className="mt-2">17,2</p>
                        </li>
                        <li>Углеводы, г
                            <p className="mt-2">10,2</p>
                        </li>
                    </ul>
                </div>
            </>
        </section>
    )
}

/*BurgerIngredient.propTypes = {
  ing: PropTypes.shape({
    image: PropTypes.string.isRequired,     
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }).isRequired
};
*/

export default IngredientDetails;

/* {props.ing.calories}
{props.ing.proteins}
{props.ing.fat}
{props.ing.carbohydrates} */