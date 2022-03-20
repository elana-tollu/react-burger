import React from 'react';

import { BurgerIcon, Button, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css'

function AppHeader() {
  return (
    <section className={styles['app-header']}>

      <div className={styles.logo}><Logo/></div>

      <nav className={styles.content}>
        <div className={styles.menu}>
          <Button type="secondary" size="small">
            <div className={styles['button-content']}>
              <BurgerIcon type="primary" /> 
                <p className="text text_type_main-default text_color_inactive ml-2">
                Конструктор
              </p>
            </div>
          </Button>
          
          <Button type="secondary" size="small">
            <div className={styles['button-content']}>
              <ListIcon type="primary" />
              <p className="text text_type_main-default text_color_inactive ml-2">
              Лента заказов
              </p>
            </div>
          </Button>
        </div>

        <Button type="secondary" size="small">
          <div className={styles['button-content']}>
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