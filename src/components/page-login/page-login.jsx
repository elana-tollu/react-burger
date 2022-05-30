import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { YandexEmailInput } from 'yandex/yandex-email-input';
import { YandexPasswordInput } from 'yandex/yandex-password-input';

import styles from './page-login.module.css';

function PageLogin () {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    return (
        <section className={styles.body}>
            <form className={styles.form}>
                <div className={styles.inputsContainer}>
                    <h1 className={styles.title}>
                        <p className="text text_type_main-medium">Вход</p>
                    </h1>
                    <div className={styles.input}>
                        <YandexEmailInput value = {email} onChange = {setEmail}/>
                    </div>
                    <div className={styles.input}>
                        <YandexPasswordInput value = {password} onChange = {setPassword}/>
                    </div>

                    <div className={styles.button}>
                        <Button type="primary" 
                            size="medium" 
                            style={{ height: '56px' }} 
                            className="ml-1 mr-1 mb-1 mt-6">
                            Войти
                        </Button>
                    </div>
                </div>
                
                <div className={styles.linksContainer}>
                    <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь? 
                        <Link to='/register' className={styles.link}>
                            Зарегистрироваться
                        </Link>
                    </p>
                    <p className="text text_type_main-default text_color_inactive">Забыли пароль? 
                        <Link to='/forgot-password' className={styles.link}>
                            Восстановить пароль
                        </Link>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default PageLogin;