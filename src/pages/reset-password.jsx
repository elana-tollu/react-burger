import React from 'react';

import styles from './home.module.css';
import PageResetPassword from 'components/page-reset-password/page-reset-password.jsx';


function ResetPasswordPage () {  
  
  return (
    <div className={styles.app}>
      <PageResetPassword />
    </div>
  );
};

export default ResetPasswordPage;