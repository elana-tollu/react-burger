import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { YandexPasswordInput } from 'yandex/yandex-password-input';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import {resetPasswordAction} from 'services/actions/actions';

import styles from './page-reset-password.module.css';

function PageResetPassword () {
    
    const [form, setForm] = React.useState({
        password: '',
        token: '',
    })

    const onChange = e => {
        setForm({...form, [e.target.name]:e.target.value});
    };
    
    const dispatch = useDispatch();

    const resetPassword = (event) => {
        event.preventDefault();
        dispatch(resetPasswordAction (form.password, form.token));
    };

    const isResettingPassword = useSelector(store => store.isResettingPassword);
    if(!isResettingPassword) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <section className={styles.body}>
            <form className={styles.form}
                onSubmit={resetPassword}>
                <div className={styles.inputsContainer}>
                    <h1 className={styles.title}>
                        <p className="text text_type_main-medium">Восстановление пароля</p>
                    </h1>
                    <div className={styles.input}>
                        <YandexPasswordInput 
                            placeholder="Введите новый пароль" 
                            onChange={onChange} 
                            value={form.password} 
                            name={'password'} 
                            size='default' 
                        />
                    </div>

                    <div className={styles.input}>
                        <Input 
                            type={'text'}
                            placeholder="Введите код из письма" 
                            onChange={onChange} 
                            icon={null}
                            value={form.token} 
                            name={'token'} 
                            error={false}
                            errorText={'Ошибка'}
                            size='default'
                        />
                    </div>

                    <div className={styles.button}>
                        <Button 
                            type="primary" 
                            size="medium" 
                            style={{ height: '56px' }} 
                            className="ml-1 mr-1 mb-1 mt-6">
                            Сохранить
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

export default PageResetPassword;