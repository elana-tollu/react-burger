import React from 'react';
import { Link } from 'react-router-dom';
import { YandexEmailInput } from 'yandex/yandex-email-input';
import { YandexPasswordInput } from 'yandex/yandex-password-input';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './profile-menu.module.css';

function ProfileMenu () {
    return (
        <section className={styles.body}>
            <ul className={styles.list}>
                <li className="text text_type_main-medium text_color_inactive">
                    <Link className={styles.link}>Профиль</Link>
                </li>
                <li className="text text_type_main-medium text_color_inactive">
                    <Link className={styles.link}>История заказов</Link>
                </li>
                <li className="text text_type_main-medium text_color_inactive">
                    <Link className={styles.link}>Выход</Link>
                </li>
            </ul>

            <p className="text text_type_main-default text_color_inactive">
                В этом разделе вы можете изменить свои персональные данные
            </p>
        </section>
    )
}

export default ProfileMenu;