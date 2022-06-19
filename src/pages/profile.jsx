import React from 'react';

import styles from './home.module.css';
import ProfileInfo from 'components/profile-info/profile-info';


function ProfilePage () {  
  
  return (
    <div className={styles.app}>
      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;