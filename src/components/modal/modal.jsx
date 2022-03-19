import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay.jsx'

import styles from './modal.module.css';

const modalRoot = document.body;

function Modal (props) {
    const handleEscClose = (event) => {
        if (event.key === 'Escape') {
            props.onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscClose); // при монтировании добавляем обработчик события
        return () => {
            document.removeEventListener('keydown', handleEscClose); // при размонтировании убираем
        }
    }, []);

    return ReactDOM.createPortal ( (
        <div className={styles['modal-container']}>
            <section className={styles.modal}>
                <ModalOverlay onClick={() => props.onClose()}/>
                <div className={styles['button-close']}>
                    <CloseIcon type="primary"  onClick={() => props.onClose()} />
                </div>
                <div>
                    {props.children}
                </div>
            </section>
        </div>
    ),
    modalRoot
    )   
}

export default Modal;