import React, {FunctionComponent} from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import pageNotFound from 'images/not_found.png';

export const NotFoundPage: FunctionComponent<{}> = () => { 
    return (
      <div className={styles.app}>
            <img alt='page not found' src={pageNotFound} />
            <br/>
            <Link to='/' className={styles.link}>
                <p className="text text_type_main-medium text_color_inactive">Вернуться в конструктор</p>
            </Link>
      </div>
    );
  };
  
export default NotFoundPage;