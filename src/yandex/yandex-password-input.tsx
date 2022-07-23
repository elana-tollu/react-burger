import React, { useRef, useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { TICons } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';

export const YandexPasswordInput = ({
    placeholder= 'Пароль',
    value,
    onChange,
    name,
    size,
    icon
}: {
    placeholder: string;
    value: string;
    name: string;
    size?: 'default' | 'small';
    icon?: keyof TICons;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
    const [visible, setVisible] = useState(false);

    const [error, setError] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const onIconClick = () => {
        setVisible(true);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const validateField = (value: string) => {
        setError(value.length < 6);
    };

    const onFocus = () => {
        setError(false);
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value) {
            validateField(e.target.value);
        } else {
            setError(false);
        }
        setVisible(false);
    };

    return (
        <Input
            type={visible ? 'text' : 'password'}
            placeholder={placeholder}
            onChange={onChange}
            icon={icon ? icon : visible ? 'HideIcon' : 'ShowIcon'}
            value={value}
            ref={inputRef}
            onBlur={onBlur}
            onFocus={onFocus}
            name={name}
            error={error}
            onIconClick={onIconClick}
            errorText={'Некорректный пароль'}
            size={size === 'small' ? 'small' : 'default'}
        />
    );
};