import React from 'react';

import styles from './home.module.css';
import PageRegistration from '../components/page-registration/page-registration';


function RegistrationPage () {  
  
  return (
    <div className={styles.app}>
      <PageRegistration />
    </div>
  );
};

export default RegistrationPage;