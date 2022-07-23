import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import IngredientDetails from 'components/ingredient-details/ingredient-details';
import styles from './home.module.css';
import HomePage from 'pages/home';
import Modal from 'components/modal/modal';

function IngredientPage() {
  let { id } = useParams<{id: string}>();
  let location = useLocation<any>();
  let background = location.state && location.state.background;

  let history = useHistory();
  let back = () => {
    history.goBack();
  };
  
  const ingredientDetailsModal = (
    <Modal 
      onClose={back}> 
      <IngredientDetails ingredientId = {id}/> 
    </Modal>
  );
  
  return (
    <>
      <Router>
        <Switch location={background || location}>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/ingredients/:id">
              <div className={styles.app}>
                <section className={styles.modal}>
                    <IngredientDetails ingredientId = {id} />
                </section>
              </div>
            </Route>
        </Switch>
      </Router>
      {background && ingredientDetailsModal}
    </>
  );
}

export default IngredientPage;