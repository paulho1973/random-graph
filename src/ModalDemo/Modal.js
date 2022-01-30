import React from "react";

import styles from './Modal.module.css';

const Modal = ({ handleClose, show, children }) => {

  
    return (
      <div className={`${styles.modal} ${show ? styles.displayblock : styles.displaynone}`} >
        <section className={styles.modalmain}>
          {children}
          <button
            onClick={handleClose}
          >
            Close
          </button>
        </section>
      </div>
    );
  };

  export default Modal;