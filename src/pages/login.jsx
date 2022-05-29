import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import AppHeader from '../components/app-header/app-header.jsx';
import PageLogin from '../components/page-login/page-login.jsx';
import styles from './home.module.css';

function Login() {
  
  return (
    <>

      <div className={styles.app}>
        <AppHeader />

        <section>
          <DndProvider backend={HTML5Backend}>

            <PageLogin />

          </DndProvider>
        </section>

      </div>
    </>
  );
}

export default Login;