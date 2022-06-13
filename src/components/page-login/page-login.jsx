import React, {useState} from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { YandexEmailInput } from 'yandex/yandex-email-input';
import { YandexPasswordInput } from 'yandex/yandex-password-input';
import { loginAction } from 'services/actions/actions';

import styles from './page-login.module.css';

function PageLogin () {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, isLoggingIn] = useSelector(store => [store.isLoggedIn, store.isLoggingIn]);
    const dispatch = useDispatch();
      
    const submit = (event) => {
        event.preventDefault();
        dispatch(loginAction (email, password));
    }
    
    let {state} = useLocation();
    
    if(isLoggedIn) {
        return (
            <Redirect 
                to={ state?.from || '/' }
            />
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
                        <YandexEmailInput value = {email} onChange = {e => setEmail(e.target.value)}/>
                    </div>
                    <div className={styles.input}>
                        <YandexPasswordInput value = {password} onChange = {e => setPassword(e.target.value)}/>
                    </div>

                    <div className={styles.button}>
                        <Button disabled={isLoggingIn}
                            type="primary" 
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