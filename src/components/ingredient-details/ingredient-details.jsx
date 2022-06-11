import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styles from './ingredient-details.module.css';

function IngredientDetails (props) {
    const ingredientId = props.ingredient._id;
    const ingredient = useSelector(store => store.ingredients.find(ing => ing._id === ingredientId));
    
    return (
        <section className={styles['ingredient-details']}>
            <div className={styles.title} />
            
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
    ingredient: PropTypes.shape({
    image: PropTypes.string.isRequired,     
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }).isRequired
};

export default IngredientDetails;
