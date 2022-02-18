import { BurgerIcon, Button, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css'
import React from 'react';

function AppHeader() {
  return (
    <section className={styles.AppHeader}>
      <nav className={styles.content}>
        <div>
          <Button type="secondary" size="medium">
            <BurgerIcon type="primary" /> 
            Конструктор
          </Button>
          
          <Button type="secondary" size="small">
            <ListIcon type="primary" />
            Лента заказов
          </Button>
        </div>
        <Logo />

        <Button type="secondary" size="small">
          <ProfileIcon type="primary" />
          Личный кабинет
          </Button>
      </nav>
    </section>
  );
}

export default AppHeader;
