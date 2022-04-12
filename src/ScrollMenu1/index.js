import React from 'react';

import styles from './ScrollMenu1.module.scss';

const ScrollMenu1 = () => {
    return (
      <div className={styles.container}>

        <header className={styles.scroll}>
          <nav>
            <span className={styles.navitem}>Blog</span>
            <span className={styles.navitem}>Portfolio</span>
            <span className={styles.navitem}>Downloads</span>
            <span className={styles.navitem}>About</span>
            <span className={styles.navitem}>Contact</span>
            <span className={styles.navitem}>Blog</span>
            <span className={styles.navitem}>Portfolio</span>
            <span className={styles.navitem}>Downloads</span>
            <span className={styles.navitem}>About</span>
            <span className={styles.navitem}>Contact</span>
          </nav>
        </header>

        <div className={styles.space}></div>

        <header className={styles.header2}>
            <span class={styles.logo}>Logo</span>
          <nav className={styles.scroll}>
            <span className={styles.navitem}>Blog</span>
            <span className={styles.navitem}>Portfolio</span>
            <span className={styles.navitem}>Downloads</span>
            <span className={styles.navitem}>About</span>
            <span className={styles.navitem}>Contact</span>
            <span className={styles.navitem}>Blog</span>
            <span className={styles.navitem}>Portfolio</span>
            <span className={styles.navitem}>Downloads</span>
            <span className={styles.navitem}>About</span>
            <span className={styles.navitem}>Contact</span>
          </nav>
        </header>

        <div className={styles.space}></div>

        <header className={styles.header3}>
            <span class={styles.logo}>Logo</span>
          <nav className={styles.scroll}>
            <span className={styles.navitem}>Blog</span>
            <span className={styles.navitem}>Portfolio</span>
            <span className={styles.navitem}>Downloads</span>
            <span className={styles.navitem}>About</span>
            <span className={styles.navitem}>Contact</span>
            <span className={styles.navitem}>Blog</span>
            <span className={styles.navitem}>Portfolio</span>
            <span className={styles.navitem}>Downloads</span>
            <span className={styles.navitem}>About</span>
            <span className={styles.navitem}>Contact</span>
          </nav>
        </header>

      </div>
    );
};

export default ScrollMenu1;