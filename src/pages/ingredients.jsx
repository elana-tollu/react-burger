import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import IngredientDetails from 'components/ingredient-details/ingredient-details.jsx';
import styles from './home.module.css';

function IngredientPage() {
  let { id } = useParams();
  
  return (
    <>
      <div className={styles.app}>
       
        <section>
            <IngredientDetails ingredientId = {id} />
        </section>

      </div>
    </>
  );
}

export default IngredientPage;