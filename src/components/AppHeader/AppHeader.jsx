import React from 'react';

import { BurgerIcon, Button, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './AppHeader.module.css'

function AppHeader() {
  return (
    <section className={styles.AppHeader}>

      <div className={styles.logo}><Logo/></div>

      <nav className={styles.content}>
        <div className={styles.menu}>
          <Button type="secondary" size="small">
            <div className={styles.buttonContent}>
              <BurgerIcon type="primary" /> 
                <p className="text text_type_main-default text_color_inactive ml-2">
                Конструктор
              </p>
            </div>
          </Button>
          
          <Button type="secondary" size="small">
            <div className={styles.buttonContent}>
              <ListIcon type="primary" />
              <p className="text text_type_main-default text_color_inactive ml-2">
              Лента заказов
              </p>
            </div>
          </Button>
        </div>

        <Button type="secondary" size="small">
          <div className={styles.buttonContent}>
            <ProfileIcon type="primary" />
            <p className="text text_type_main-default text_color_inactive ml-2">
              Личный кабинет
            </p>
          </div>
        </Button>
      </nav>
    </section>
  );
}

export default AppHeader;
