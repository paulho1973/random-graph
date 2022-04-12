import React, { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';

import styles from './SwipeMenu1.module.scss';

const SwipeMenu1 = () => {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);

  return (

    <div className={styles.container}>

      <header className={styles.scroll} ref={ref} onMouseDown={onMouseDown}>
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
    </div>

  );
};

export default SwipeMenu1;