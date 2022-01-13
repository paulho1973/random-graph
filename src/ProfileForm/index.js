import React from 'react';

import styles from './ProfileForm.module.css';

export default function ProfileForm() {

  return (
    <div>

      <div className={styles.wrapper}>
        <h3 className={styles.h3}>Edit your settings</h3>
        <form className={styles.form} action>
          <p className={styles.p}>
            <label className={styles.label} htmlFor>Your name</label>
            <input className={styles.input} type="text" />
          </p>
          <p className={styles.p}>
            <label className={styles.label} htmlFor>Email</label>
            <input className={styles.input} type="email" />
          </p>
          <p className={styles.inputfilewrapper}>
            <label className={styles.label} htmlFor="upload">Upload your photo</label>
            <input className={styles.input} type="file" name id="upload" />
          </p>
          <p className={styles.p}>
            <button className={styles.button}>Save</button>
          </p>
        </form>
      </div>

    </div>
  );
}
