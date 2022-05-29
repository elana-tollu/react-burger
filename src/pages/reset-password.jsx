import React from 'react';

import AppHeader from 'components/app-header/app-header.jsx';
import styles from './home.module.css';
import PageResetPassword from 'components/page-reset-password/page-reset-password.jsx';


function ResetPasswordPage () {  
  
  return (
    <div className={styles.app}>
        <AppHeader />

        <PageResetPassword />
    </div>
  );
};

export default ResetPasswordPage;