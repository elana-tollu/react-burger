import React from 'react';

import OrderFeed from 'components/order-feed/order-feed.jsx';
import styles from './home.module.css';


function FeedPage () {  
  
  return (
    <div className={styles.app}>
      <OrderFeed />
    </div>
  );
};

export default FeedPage;