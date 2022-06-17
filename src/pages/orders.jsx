import ProfileOrders from 'components/profile-orders/profile-orders';
import React from 'react';

import styles from './home.module.css';


function Orders () {  
  
  return (
    <div className={styles.app}>
      <ProfileOrders/>
    </div>
  );
};

export default Orders;