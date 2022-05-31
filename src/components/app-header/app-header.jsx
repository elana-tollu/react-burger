import React from 'react';
import {NavLink, Link} from 'react-router-dom';

import { BurgerIcon, Button, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={styles['app-header']}>

      <div className={styles.logo}>
        <Link to='/'>
          <Logo/>
        </Link>
      </div>

      <nav className={styles.content}>
        <div className={styles.menu}>
          
          <Button type="secondary" size="small">
            <div className={styles['button-content']}>
              <NavLink 
                to={{pathname: `/`}}
                className={styles.link}
                activeClassName={styles.activeLink}>
                <BurgerIcon type="secondary" /> 
                  <p className="text text_type_main-default text_color_inactive ml-2">
                  Конструктор
                </p>
              </NavLink>
            </div>
          </Button>
           
          <NavLink 
            to={{pathname: `/feed`}}
            className={styles.link}
            activeClassName={styles.activeLink}>
            <Button type="secondary" size="small">
              <div className={styles['button-content']}>
                <ListIcon type="secondary" />
                  <p className="text text_type_main-default text_color_inactive ml-2">
                    Лента заказов
                  </p>
              </div>
          </Button>
          </NavLink>
        </div>

        <Button type="secondary" size="small">
          <div className={styles['button-content']}>
            <ProfileIcon type="secondary" />
            <Link to='/profile'>
              <p className="text text_type_main-default text_color_inactive ml-2">
                Личный кабинет
              </p>
            </Link>
          </div>
        </Button>
      </nav>
    </header>
  );
}

export default AppHeader;
