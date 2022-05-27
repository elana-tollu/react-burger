import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from 'pages/home.jsx';

import AppHeader from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import PageLogin from '../page-login/page-login.jsx';
import PageRegistration from '../page-registration/page-registration';
import PageForgotPassword from '../page-forgot-password/page-forgot-password';
import { loadIngredientsAction } from 'services/actions/actions';
import PageResetPassword from '../page-reset-password/page-reset-password.jsx';

import styles from './app.module.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredientsAction())
  }, []);
  
  return (
    <>

      <div className={styles.app}>
        <AppHeader />

        <section className={styles.body}>
          <DndProvider backend={HTML5Backend}>

            <BurgerIngredients />

            <BurgerConstructor />
          </DndProvider>
        </section>

        

        <Router>
          <Route path="/">
            
            <PageLogin />
            <PageRegistration />
            <PageForgotPassword />
            <PageResetPassword />

            <HomePage />
          </Route>
        </Router>

      </div>
    </>
  );
}

export default App;



