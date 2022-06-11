import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styles from './ingredient-details.module.css';

function IngredientDetails (props) {
   const ingredient = useSelector(store => store.ingredients.find(ing => ing._id === props.ingredientId));
    
   if(!ingredient) {
    return (
        <p className="text text_type_main-large">
            Ингредиент в пути
        </p>
        )
    }

    return (
        <section className={styles['ingredient-details']}>
            <div className={styles.title}>           
                Детали ингредиента
            </div>
            
            <>
                <img
                    className={styles.image}
                    src= {ingredient.image}
                    alt= {ingredient.name}
                /> 

                <p className="text text_type_main-medium mt-4 p-1">{ingredient.name}</p> 

                <div className="text text_type_main-default text_color_inactive mt-8">
                    <ul className={styles.nutritions}>
                        <li>Калории,ккал
                            <p className="mt-2">{ingredient.calories}</p>
                        </li> 
                        <li>Белки, г
                            <p className="mt-2">{ingredient.proteins}</p>
                        </li>
                        <li>Жиры, г
                            <p className="mt-2">{ingredient.fat}</p>
                        </li>
                        <li>Углеводы, г
                            <p className="mt-2">{ingredient.carbohydrates}</p>
                        </li>
                    </ul>
                </div>
            </>
        </section>
    )
}

IngredientDetails.propTypes = {
    ingredientId: PropTypes.string.isRequired
};

export default IngredientDetails;
