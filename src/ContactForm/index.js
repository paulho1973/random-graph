import React from 'react';

import styles from './ContactForm.module.css';

export default function ContactForm() {

  return (
    <div>
      <div className={styles.contain}>
        <div className={styles.contacts}>
          <h3 className={styles.h3}>Our contacts</h3>
          <ul className={styles.ul}>
            <li>San Joe St.</li>
            <li>00-1212121-11</li>
            <li>mail@mail.com</li>
          </ul>
        </div>
        <div className={styles.formfill}>
          <h3 className={styles.h3}>Send us a message</h3>        
          <form className={styles.form} action>       
            <p className={styles.p}>
              <label className={styles.label} htmlFor>Your name</label>
              <input className={styles.input} type="text" />
            </p>
            <p className={styles.p}>
              <label className={styles.label} htmlFor>Skype</label>
              <input className={styles.input} type="text" />
            </p>
            <p className={styles.p}>
              <label className={styles.label} htmlFor>Email Address</label>
              <input className={styles.input} type="text" />
            </p>
            <p className={styles.p}>
              <label className={styles.label} htmlFor>Topic</label>
              <input className={styles.input} type="text" />
            </p>
            <p className={styles.fullwidth}>
              <label className={styles.label} htmlFor>Write your message</label>
              <textarea className={styles.textarea} cols={30} rows={7} defaultValue={""} />
            </p>
            <p className={styles.fullwidth}>
              <button className={styles.button}>Send</button>
            </p>
          </form> 
        </div>
      </div>
    </div>
  );
}
