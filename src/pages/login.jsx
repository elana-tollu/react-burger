import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from '../components/app-header/app-header.jsx';
import PageLogin from '../components/page-login/page-login.jsx';
import styles from './home.module.css';

function Login() {
  
  return (
    <>

      <div className={styles.app}>
        <AppHeader />

        <section className={styles.body}>
          <DndProvider backend={HTML5Backend}>

            <PageLogin />

          </DndProvider>
        </section>

      </div>
    </>
  );
}

export default Login;