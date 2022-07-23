import React, { FunctionComponent } from 'react';
import {NavLink, Link, useLocation} from 'react-router-dom';

import { BurgerIcon, Button, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

export const AppHeader: FunctionComponent = () => {
  let {pathname} = useLocation();
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
              exact
              className={ isActive => 
              styles.link +' '+ (isActive ? styles.activeLink : "")}>
                <BurgerIcon type={pathname === '/' ? 'primary' : 'secondary'} /> 
                <p className="text text_type_main-default ml-2">
                  Конструктор
                </p>
              </NavLink>
            </div>
          </Button>
           
          <Button type="secondary" size="small">
            <div className={styles['button-content']}>
            <NavLink 
              to={{pathname: `/feed`}}
              className={ isActive => 
              styles.link +' '+ (isActive ? styles.activeLink : "")}>
                <ListIcon type={pathname === '/feed' ? 'primary' : 'secondary'} />
                  <p className="text text_type_main-default ml-2">
                    Лента заказов
                  </p>
                  </NavLink>
            </div>
          </Button>
        </div>

        <Button type="secondary" size="small">
          <div className={styles['button-content']}>
           <NavLink 
              to={{pathname: `/profile`}}
              className={ isActive => 
              styles.link +' '+ (isActive ? styles.activeLink : "")}>
                <ProfileIcon type={pathname === '/profile' ? 'primary' : 'secondary'} />
                <p className="text text_type_main-default ml-2">
                  Личный кабинет
                </p>
            </NavLink>
          </div>
        </Button>
      </nav>
    </header>
  );
}

export default AppHeader;
