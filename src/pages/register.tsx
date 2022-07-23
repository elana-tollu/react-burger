import React, { FunctionComponent } from 'react';
import styles from './home.module.css';
import PageRegistration from '../components/page-registration/page-registration';


export const RegistrationPage: FunctionComponent<{}> = () =>  {  
  return (
    <div className={styles.app}>
      <PageRegistration />
    </div>
  );
};

export default RegistrationPage;