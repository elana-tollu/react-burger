import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal-overlay.module.css';

function ModalOverlay (props) {
    return (
        <section className={styles['modal-overlay']} onClick = {props.onClick}/>
    )
}

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

export default ModalOverlay;