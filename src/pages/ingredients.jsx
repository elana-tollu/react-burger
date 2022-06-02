import React from 'react';

import IngredientDetails from 'components/ingredient-details/ingredient-details.jsx';
import styles from './home.module.css';

function IngredientPage() {
  
  return (
    <>

      <div className={styles.app}>
       
        <section>
            <IngredientDetails />
        </section>

      </div>
    </>
  );
}

export default IngredientPage;