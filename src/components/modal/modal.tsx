import { FunctionComponent, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay'
import styles from './modal.module.css';

const modalRoot = document.querySelector('#modals')!;
interface IModalProps {
    readonly title?: string;
    readonly children: ReactNode;
    readonly onClose: () => void;
}

const Modal: FunctionComponent <IModalProps> = (props) => {
    
    const handleClickClose = () => {
        props.onClose();
    };

    useEffect(() => {
        const handleEscClose = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                props.onClose();
            }
        };
    
        document.addEventListener('keydown', handleEscClose); // при монтировании добавляем обработчик события
        return () => {
            document.removeEventListener('keydown', handleEscClose); // при размонтировании убираем
        }
    }, [props.onClose]);

    return ReactDOM.createPortal ( (
        <div className={styles['modal-container']}>
            <section className={styles.modal}>
                <ModalOverlay onClick= {handleClickClose}/>

                <div className={styles.title}>
                <h2 className="text text_type_main-medium">{props.title}</h2></div>            
                <div className={styles['button-close']}>
                    <CloseIcon type="primary"  onClick= {handleClickClose} />
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

//todo 
/* Modal.propTypes = {
    title: PropTypes.string, 
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
 */
export default Modal;