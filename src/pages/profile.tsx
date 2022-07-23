import React, {FunctionComponent} from 'react';

import styles from './home.module.css';
import ProfileInfo from 'components/profile-info/profile-info';

export const ProfilePage: FunctionComponent<{}> = () => {
  return (
    <div className={styles.app}>
      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;