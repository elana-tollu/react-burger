import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { YandexEmailInput } from 'yandex/yandex-email-input';
import { YandexPasswordInput } from 'yandex/yandex-password-input';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import {registerAction} from 'services/actions/actions';
import {isAuthenticated} from 'utils/auth';

import styles from './page-registration.module.css';
import { useAppDispatch } from 'services/hooks';

function PageRegistration () {
    
    const [form, setForm] = React.useState({
        userName: '',
        email: '',
        password: '',
    })
    const onChange = e => {
        setForm({...form, [e.target.name]:e.target.value});
    };

    const dispatch = useAppDispatch();
    const register = (event) => {
        event.preventDefault();
        dispatch(registerAction (form.userName, form.email, form.password));
    };

    if(isAuthenticated()) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <section className={styles.body}>
            <form className={styles.form}
                    onSubmit={register}>
                <div className={styles.inputsContainer}>
                    <h1 className={styles.title}>
                        <p className="text text_type_main-medium">Регистрация</p>
                    </h1>
                    <div className={styles.input}>
                        <Input 
                            type={'text'}
                            placeholder="Имя" 
                            onChange={onChange} 
                            icon={null}
                            value={form.userName} 
                            name="userName" 
                            error={false}
                            errorText="Ошибка"
                            size='default'
                        />
                    </div>
                    <div className={styles.input}>
                        <YandexEmailInput value={form.email} name="email" onChange={onChange} />
                    </div>
                    <div className={styles.input}>
                        <YandexPasswordInput value={form.password} name="password" onChange={onChange} />
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
                        <Link to='/login' className={styles.link}>
                            Войти
                        </Link>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default PageRegistration;