import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { YandexEmailInput } from 'yandex/yandex-email-input';
import { YandexPasswordInput } from 'yandex/yandex-password-input';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './profile-info.module.css';
import ProfileMenu from '../profile-menu/profile-menu';

function ProfileInfo () {
    const originalData = useSelector(store => ({
            ...store.user,
            password:''
        }));

    const [form, setForm] = React.useState(originalData)
    const onChange = e => {
        setForm({...form, [e.target.name]:e.target.value});
    };

    const isEdited = form !== originalData;

    const cancel = () => {
        setForm(originalData)
    };

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
                            value={form.name} 
                            name="name" 
                            error={false}
                            errorText={'Ошибка'}
                            size='default'
                        />
                    </div>
                    <div className={styles.input}>
                        <YandexEmailInput value={form.email} name="email" onChange={onChange} />
                    </div>
                    <div className={styles.input}>
                        <YandexPasswordInput value={form.password} name="password" onChange={onChange} 
                         icon={'EditIcon'} />
                    </div>

                    {isEdited && <div className={styles.buttonContainer}>
                        <div className={styles.button}>
                            <Button 
                                onClick = {cancel}
                                type="secondary" 
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
                    </div>}
                </div> 
            </form>
        </section>
    )
}

export default ProfileInfo;