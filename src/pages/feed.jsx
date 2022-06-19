import React from 'react';

import styles from './home.module.css';


function FeedPage () {  
  
  return (
    <div className={styles.app}>
        <h1 className="text text_type_main-medium text_color_inactive">
           Лента заказов
        </h1>
    </div>
  );
};

export default FeedPage;