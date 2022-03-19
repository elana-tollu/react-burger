import React from 'react';
import ReactDOM from 'react-dom';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './modal.module.css';

const modalRoot = document.body;

function Modal (props) {
    console.log ("props:", props);
    return ReactDOM.createPortal ( (
        <div className="modal-container">
            <section className={styles.modal}>
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