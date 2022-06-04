import React from 'react';
import {  NavLink } from 'react-router-dom';

import styles from './profile-menu.module.css';

function ProfileMenu () {
    return (
        <section className={styles.body}>
            <ul className={styles.list}>
                <li className="text text_type_main-medium text_color_inactive">
                    <NavLink 
                        to={{pathname: `/profile`}}
                        className={styles.link}
                        activeClassName={styles.activeLink}>
                            Профиль
                    </NavLink>
                </li>
                <li className="text text_type_main-medium text_color_inactive">
                    <NavLink 
                        to={{pathname: `/profile/orders`}} 
                        className={styles.link}
                        activeClassName={styles.activeLink}>
                            История заказов
                    </NavLink>
                </li>
                <li className="text text_type_main-medium text_color_inactive">
                    <NavLink 
                        to={{pathname: `/login`}} 
                        className={styles.link}
                        activeClassName={styles.activeLink}>
                            Выход
                    </NavLink>
                </li>
            </ul>

            <p className="text text_type_main-default text_color_inactive">
                В этом разделе вы можете изменить свои персональные данные
            </p>
        </section>
    )
}

export default ProfileMenu;