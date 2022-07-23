import React, { FunctionComponent } from 'react';

import styles from './home.module.css';
import PageResetPassword from 'components/page-reset-password/page-reset-password';

export const ResetPasswordPage: FunctionComponent<{}> = () => {  
  return (
    <div className={styles.app}>
      <PageResetPassword />
    </div>
  );
};

export default ResetPasswordPage;