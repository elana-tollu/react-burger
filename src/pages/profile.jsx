import React from 'react';

import AppHeader from 'components/app-header/app-header.jsx';
import styles from './home.module.css';


function ProfilePage () {  
  
  return (
    <div className={styles.app}>
        <AppHeader />

        <h1>Profile</h1>
    </div>
  );
};

export default ProfilePage;