import React from 'react';
import styles from './ListOfIngridients.module.css';
import IngredientDetails from '../IngredientDetails/IngredientDetails'

function ListOfIngridients (props){
    const listOfIngridients = props.ingredients.map((ing, index) =>
    <IngredientDetails key={index} ing={ing}/>
  );

  return (
        <section id={props.id}>
            <p className="text text_type_main-medium">
              {props.title}
            </p>
            <div style={{ backgroundColor: '#131316' }} className="mb-10 mt-10">
                <ul className={styles.cardList}>
                    {listOfIngridients}
                </ul>
            </div> 
        </section>
    );
}

export default ListOfIngridients