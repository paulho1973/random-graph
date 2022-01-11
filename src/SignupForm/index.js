import React from 'react';

import styles from './SignupForm.module.css';

export default function SignupForm() {

  return (
    <div>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="firstName" >First Name</label>
        <input className={styles.input} id="firstName" type="text" />
        <label className={styles.label} htmlFor="lastName" >Last Name</label>
        <input className={styles.input} id="lastName" type="text" />
        <label className={styles.label} htmlFor="job">Job</label>
        <input className={styles.input} id="job" type="text" />
        <label className={styles.label} htmlFor="age">Age</label>
        <input className={styles.input} id="age" type="text" />
        <label className={styles.label} htmlFor="email">Email</label>
        <input className={styles.input} id="email" type="email" />
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
}
