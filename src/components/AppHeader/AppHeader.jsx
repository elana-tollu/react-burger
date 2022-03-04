import { BurgerIcon, Button, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css'
import React from 'react';

function AppHeader() {
  return (
    <section className={styles.AppHeader}>

      <div className={styles.logo}><Logo/></div>

      <nav className={styles.content}>
        <div className={styles.menu}>
          <Button type="secondary" size="small">
            <div className={styles.buttonContent}>
              <BurgerIcon type="primary" /> 
              <p style={{ marginLeft: '8px' }} className="text text_type_main-default text_color_inactive">
                Конструктор
              </p>
            </div>
          </Button>
          
          <Button type="secondary" size="small">
            <div className={styles.buttonContent}>
              <ListIcon type="primary" />
              <p style={{ marginLeft: '8px' }} className="text text_type_main-default text_color_inactive">
              Лента заказов
              </p>
            </div>
          </Button>
        </div>

        <Button type="secondary" size="small">
          <div className={styles.buttonContent}>
            <ProfileIcon type="primary" />
            <p style={{ marginLeft: '8px' }} className="text text_type_main-default text_color_inactive">
              Личный кабинет
            </p>
          </div>
        </Button>
      </nav>
    </section>
  );
}

export default AppHeader;
