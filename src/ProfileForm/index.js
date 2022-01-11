import React from 'react';

import styles from './ProfieForm.module.css';

export default function ProfileForm() {

  return (
    <div className={styles}>
      <form>
        <label htmlFor="firstName" >First Name</label>
        <input id="firstName" type="text" />
        <label htmlFor="lastName" >Last Name</label>
        <input id="lastName" type="text" />
        <label htmlFor="job">Job</label>
        <input id="job" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <button>Submit</button>
      </form>
    </div>
  );
}
