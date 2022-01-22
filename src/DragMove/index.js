import React, { useState } from "react";

import DragMovePointer from "./DragMovePointer";

import logo from '../logo/Soccerball.svg';

import styles from './DragMove.module.css';

function DragMoveTest() {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0
  });

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };

  return (
    <div className={styles.container}>
    
        <DragMovePointer onDragMove={handleDragMove}>
          <div
            style={{
              transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
            }}
          >
            <img src={logo} alt="logo" height="70" width="70" />
          </div>
        </DragMovePointer>
    
    </div>
  );
}

export default DragMoveTest;
