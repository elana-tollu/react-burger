import React, { FunctionComponent } from 'react';

import styles from './home.module.css';
import PageForgotPassword from 'components/page-forgot-password/page-forgot-password';

export const ForgotPasswordPage: FunctionComponent<{}> = () => {
  return (
    <div className={styles.app}>
      <PageForgotPassword />
    </div>
  );
};

export default ForgotPasswordPage;