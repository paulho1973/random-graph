import React, {useState} from 'react';

import styles from './ButtonNo.module.css';

import loading from '../logo/loading.svg';

export default function ButtonNo() {

  const [disabled, setDisabled] = useState(false);

  // handler recieves the `e` event object
  const formPreventDefault = (e) => {
    alert('here');
    e.preventDefault();
  }
  
  const onClickPreventDefault = (e) => {
    alert('onClickPreventDefault called, form will not submit');
    e.preventDefault();
  }

  const noDoubleClick = (e) => {
    e.preventDefault();
    setDisabled(true);

    setTimeout( () => {
        setDisabled(false);
    }, 3000);
  }

  return (
    <div>
      <h2>form submit prevent default</h2>
      <form className={styles.form} onSubmit={formPreventDefault}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input className={styles.input} id="email" type="email" />
        <button className={styles.button} disabled={false} >Submit</button>
      </form>
      <h2>onClick prevent default</h2>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input className={styles.input} id="email" type="email" />
        <button className={styles.button} disabled={false} onClick={onClickPreventDefault} >Submit</button>
      </form>
      <h2>Avoid Double Click Submit</h2>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input className={styles.input} id="email" type="email" />
        <button className={styles.button} disabled={disabled} onClick={noDoubleClick} >
          { disabled ?
            <img className={styles.loader} src={loading} alt="loading" />
            :
            "submit"
          }
        </button>
      </form>
      <div className={styles.section}>
        <img className={styles.loader} src={loading} alt="loading" />
      </div>
    </div>
  );
}
