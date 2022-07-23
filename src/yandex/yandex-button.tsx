import React, { CSSProperties, SyntheticEvent } from 'react';
import styles from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/button.module.css';

export const YandexButton: React.FC<{
    type?: 'secondary' | 'primary';
    size?: 'small' | 'medium' | 'large';
    style?: CSSProperties;
    className?: string;
    onClick?: (() => void) | ((e: SyntheticEvent) => void);
    disabled?: boolean;
    name?: string;
    htmlType?: 'button' | 'submit' | 'reset';
}> = ({
    children,
    type = 'primary',
    size = 'medium',
    style,
    className = '',
    onClick,
    disabled = false,
    name,
    htmlType,
}) => {
    const _className = `${className} ${styles.button} ${
        type === 'primary' ? styles.button_type_primary : styles.button_type_secondary
    } ${
        size === 'medium'
            ? styles.button_size_medium
            : size === 'small'
            ? styles.button_size_small
            : styles.button_size_large
    }`;

    return (
        <button
            type={htmlType}
            disabled={disabled}
            name={name}
            onClick={onClick}
            className={_className}
            style={style}
        >
            {children}
        </button>
    );
};