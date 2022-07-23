import React, {useState, FunctionComponent, FormEventHandler} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { YandexEmailInput } from 'yandex/yandex-email-input';
import { YandexPasswordInput } from 'yandex/yandex-password-input';
import {isAuthenticated} from 'utils/auth';
import { login } from 'utils/api';

import styles from './page-login.module.css';
import { YandexButton } from 'yandex/yandex-button';

export const PageLogin: FunctionComponent<{}> = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);
    
    const submit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setLoading(true);
        login(email, password)
        .then(response => {
            setLoading(false);
        })
        .catch (err => {
            alert ("Упс! Зарегистрируйся и собери свой бургер, друг!");
            setLoading(false);
        });
    }
    
    if(isAuthenticated()) {
        return (
            <Redirect to="/" />
        )
    }
    return (
        <section className={styles.body}>
            <form className={styles.form}
                onSubmit={submit}>
                <div className={styles.inputsContainer}>
                    <h1 className={styles.title}>
                        <p className="text text_type_main-medium">Вход</p>
                    </h1>
                    <div className={styles.input}>
                        <YandexEmailInput placeholder = "e-mail" name = "email" value = {email} onChange = {e => setEmail(e.target.value)}/>
                    </div>
                    <div className={styles.input}>
                        <YandexPasswordInput placeholder = "Пароль" name = "password" value = {password} onChange = {e => setPassword(e.target.value)}/>
                    </div>

                    <div className={styles.button}>
                        <YandexButton disabled={isLoading}
                            type="primary" 
                            size="medium" 
                            style={{ height: '56px' }} 
                            className="ml-1 mr-1 mb-1 mt-6">
                            Войти
                        </YandexButton>
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