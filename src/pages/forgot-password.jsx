import React from 'react';

import AppHeader from 'components/app-header/app-header.jsx';
import styles from './home.module.css';
import PageForgotPassword from 'components/page-forgot-password/page-forgot-password.jsx';


function ForgotPasswordPage () {  
  
  return (
    <div className={styles.app}>
        <AppHeader />

        <PageForgotPassword />
    </div>
  );
};

export default ForgotPasswordPage;