import React from "react";

import styles from './Modal.module.css';

const Modal = ({ handleClose, show, children }) => {

  
    return (
      <>
      <div onClick={handleClose} className={`${styles.overlay} ${show ? styles.show : ""}`} >

      </div>

      <div className={`${styles.modal} ${show ? styles.show : ""}`} >
        {children}
        <button
          onClick={handleClose}
        >
          Close
        </button>
      </div>
      </>

    );
  };

  export default Modal;


  