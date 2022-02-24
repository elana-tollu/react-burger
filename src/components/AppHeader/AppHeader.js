import { BurgerIcon, Button, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css'
import React from 'react';

function AppHeader() {
  return (
    <section className={styles.AppHeader}>
      <nav className={styles.content}>
        <div className={styles.menu}>
          <Button type="secondary" size="small">
            <div className={styles.buttonContent}>
              <BurgerIcon type="primary" /> 
              <p className="text text_type_main-default text_color_inactive">
                Конструктор
              </p>
            </div>
          </Button>
          
          <Button type="secondary" size="medium">
            <div className={styles.buttonContent}>
              <ListIcon type="primary" />
              Лента заказов
            </div>
          </Button>
        </div>

        <Logo/>

        <Button type="secondary" size="medium">
          <div className={styles.buttonContent}>
            <ProfileIcon type="primary" />
            Личный кабинет
          </div>
        </Button>
      </nav>
    </section>
  );
}

export default AppHeader;
