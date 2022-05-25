import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { YandexEmailInput } from 'yandex/yandex-email-input';
import Password from '../password-input/password-input';
import InputName from '../input/input';

import styles from './page-registration.module.css';

function PageRegistration () {
    return (
        <section className={styles.body}>
            <form className={styles.form}>
                <div className={styles.inputsContainer}>
                    <h1 className={styles.title}>
                        <p className="text text_type_main-medium">Регистрация</p>
                    </h1>
                    <div className={styles.input}>
                        <InputName />
                    </div>
                    <div className={styles.input}>
                        <YandexEmailInput />
                    </div>
                    <div className={styles.input}>
                        <Password />
                    </div>

                    <div className={styles.button}>
                        <Button type="primary" 
                            size="medium" 
                            style={{ height: '56px' }} 
                            className="ml-1 mr-1 mb-1 mt-6">
                            Зарегистрироваться
                        </Button>
                    </div>
                </div>
                
                <div className={styles.linksContainer}>
                    <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы? 
                        <Link to='/' className={styles.link}>
                            Войти
                        </Link>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default PageRegistration;