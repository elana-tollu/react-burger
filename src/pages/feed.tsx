import React, { FunctionComponent } from 'react';

import OrderFeed from 'components/order-feed/order-feed';
import styles from './home.module.css';

export const FeedPage : FunctionComponent<{}> = () => {  
  return (
    <div className={styles.app}>
      <OrderFeed />
    </div>
  );
};

export default FeedPage;