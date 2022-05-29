import React from 'react';
import {Link} from 'react-router-dom';

import AppHeader from 'components/app-header/app-header.jsx';
import styles from './home.module.css';
import ProfileInfo from 'components/profile-info/profile-info';


function ProfilePage () {  
  
  return (
    <div className={styles.app}>
      <AppHeader />

      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;