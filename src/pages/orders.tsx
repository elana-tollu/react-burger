import ProfileOrders from 'components/profile-orders/profile-orders';
import React, {FunctionComponent} from 'react';

import styles from './home.module.css';

export const Orders: FunctionComponent<{}> = () => {  
  return (
    <div className={styles.app}>
      <ProfileOrders/>
    </div>
  );
};

export default Orders;