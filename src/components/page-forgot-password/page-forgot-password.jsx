import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { YandexEmailInput } from 'yandex/yandex-email-input';
import {forgotPasswordAction} from 'services/actions/actions';
import {isAuthenticated} from 'utils/auth';

import styles from './page-forgot-password.module.css';

function PageForgotPassword () {
    const isResettingPassword = useSelector(store => store.isResettingPassword);
    
    const [email, setEmail] = React.useState('')

    const onChange = e => {
        setEmail(e.target.value);
    };

    const dispatch = useDispatch();
    const recoverPassword = (event) => {
        event.preventDefault();
        dispatch(forgotPasswordAction (email));
    };

    if(isAuthenticated()) {
        return (
            <Redirect to="/" />
        )
    }

    if(isResettingPassword) {
        return (
            <Redirect to="/reset-password" />
        )
    }

    return (
        <section className={styles.body}>
            <form className={styles.form}
                onSubmit={recoverPassword}>
                <div className={styles.inputsContainer}>
                    <h1 className={styles.title}>
                        <p className="text text_type_main-medium">Восстановление пароля</p>
                    </h1>
                    <div className={styles.input}>
                    <YandexEmailInput placeholder="Укажите e-mail" value={email} name="email" onChange={onChange} size='default' />
                    </div>

                    <div className={styles.button}>
                        <Button
                            type="primary" 
                            size="medium" 
                            style={{ height: '56px' }} 
                            className="ml-1 mr-1 mb-1 mt-6">
                            Восстановить
                        </Button>
                    </div>
                </div>
                
                <div className={styles.linksContainer}>
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль? 
                        <Link to='/login' className={styles.link}>
                        Войти
                        </Link>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default PageForgotPassword;