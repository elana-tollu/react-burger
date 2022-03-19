import React from 'react';
import ReactDOM from 'react-dom';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay.jsx'

import styles from './modal.module.css';

const modalRoot = document.body;

function Modal (props) {
    console.log ("props:", props);
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