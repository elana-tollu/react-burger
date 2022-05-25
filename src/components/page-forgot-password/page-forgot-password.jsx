import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { YandexEmailInput } from 'yandex/yandex-email-input';

import styles from './page-forgot-password.module.css';

function PageForgotPassword () {
    const [value, setValue] = React.useState('')
    const onChange = e => {
      setValue(e.target.value)
    }
    return (
        <section className={styles.body}>
            <form className={styles.form}>
                <div className={styles.inputsContainer}>
                    <h1 className={styles.title}>
                        <p className="text text_type_main-medium">Восстановление пароля</p>
                    </h1>
                    <div className={styles.input}>
                    <YandexEmailInput placeholder="Укажите e-mail" onChange={onChange} value={value} name={'email'} size='default' />
                    </div>

                    <div className={styles.button}>
                        <Button type="primary" 
                            size="medium" 
                            style={{ height: '56px' }} 
                            className="ml-1 mr-1 mb-1 mt-6">
                            Восстановить
                        </Button>
                    </div>
                </div>
                
                <div className={styles.linksContainer}>
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль? 
                        <Link to='/' className={styles.link}>
                        Войти
                        </Link>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default PageForgotPassword;