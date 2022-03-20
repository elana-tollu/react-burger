import React from 'react';
import PropTypes from 'prop-types';

import styles from './ingredient-details.module.css';

function IngredientDetails (props) {
    return (
        <section className={styles['ingredient-details']}>
            <div className={styles.title} />
            
            <>
                <img
                    className={styles.image}
                    src= {props.ing.image}
                    alt=''
                /> 

                <p className="text text_type_main-medium mt-4 p-1">{props.ing.name}</p> 

                <div className="text text_type_main-default text_color_inactive mt-8">
                    <ul className={styles.nutritions}>
                        <li>Калории,ккал
                            <p className="mt-2">{props.ing.calories}</p>
                        </li> 
                        <li>Белки, г
                            <p className="mt-2">{props.ing.proteins}</p>
                        </li>
                        <li>Жиры, г
                            <p className="mt-2">{props.ing.fat}</p>
                        </li>
                        <li>Углеводы, г
                            <p className="mt-2">{props.ing.carbohydrates}</p>
                        </li>
                    </ul>
                </div>
            </>
        </section>
    )
}

IngredientDetails.propTypes = {
    ing: PropTypes.shape({
    image: PropTypes.string.isRequired,     
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }).isRequired
};

export default IngredientDetails;
