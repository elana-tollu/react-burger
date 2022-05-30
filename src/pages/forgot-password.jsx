import React from 'react';

import styles from './home.module.css';
import PageForgotPassword from 'components/page-forgot-password/page-forgot-password.jsx';


function ForgotPasswordPage () {  
  
  return (
    <div className={styles.app}>
      <PageForgotPassword />
    </div>
  );
};

export default ForgotPasswordPage;