import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { YandexEmailInput } from 'yandex/yandex-email-input';
import { YandexPasswordInput } from 'yandex/yandex-password-input';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './profile-info.module.css';
import ProfileMenu from '../profile-menu/profile-menu';

function ProfileInfo () {
    const [value, setValue] = React.useState('')
    const onChange = e => {
      setValue(e.target.value)
    }

    return (
        <section className={styles.body}>
            <ProfileMenu />

            <form className={styles.form}>
                <div className={styles.inputsContainer}>
                    <div className={styles.input}>
                        <Input 
                            type={'text'}
                            placeholder="Имя" 
                            onChange={onChange} 
                            icon={'EditIcon'}
                            value={value} 
                            name={'input'} 
                            error={false}
                            errorText={'Ошибка'}
                            size='default'
                        />
                    </div>
                    <div className={styles.input}>
                        <YandexEmailInput />
                    </div>
                    <div className={styles.input}>
                        <YandexPasswordInput 
                         icon={'EditIcon'} />
                    </div>

                    <div className={styles.buttonContainer}>
                        <div className={styles.button}>
                            <Button type="secondary" 
                                size="medium" 
                                style={{ height: '56px' }} 
                                className="ml-1 mr-1 mb-1 mt-6">
                                Отмена
                            </Button>
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
                </div> 
            </form>
        </section>
    )
}

export default ProfileInfo;