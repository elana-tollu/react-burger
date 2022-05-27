import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { YandexPasswordInput } from 'yandex/yandex-password-input';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './page-reset-password.module.css';

function PageResetPassword () {
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
                        <YandexPasswordInput 
                            placeholder="Введите новый пароль" 
                            onChange={onChange} 
                            value={value} 
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
                            value={value} 
                            name={'input'} 
                            error={false}
                            errorText={'Ошибка'}
                            size='default'
                        />
                    </div>

                    <div className={styles.button}>
                        <Button type="primary" 
                            size="medium" 
                            style={{ height: '56px' }} 
                            className="ml-1 mr-1 mb-1 mt-6">
                            Сохранить
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

export default PageResetPassword;