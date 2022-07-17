import React from 'react';

import styles from './modal-overlay.module.css';

function ModalOverlay (props) {
    return (
        <section className={styles['modal-overlay']} onClick = {props.onClick}/>
    )
}

//todo
/* ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired,
  };
 */
export default ModalOverlay;