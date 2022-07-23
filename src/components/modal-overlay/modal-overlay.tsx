import { FunctionComponent } from 'react';
import styles from './modal-overlay.module.css';

interface IModalOverlayProps {
    readonly onClick: () => void;
}

const ModalOverlay: FunctionComponent <IModalOverlayProps> = (props) => {
    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        props.onClick()
    }
    return (
        <section className={styles['modal-overlay']} onClick = {onClick}/>
    )
}

export default ModalOverlay;