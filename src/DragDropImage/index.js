import React, { useState } from "react";

import styles from './DragDropImage.module.css';

import logo from '../logo/Soccerball.svg';

const DragDropImage = () => {

	const [dragImage, setDragImage] = useState(logo);
	const [dropImage, setDropImage] = useState(null);

    const allowDrop = (e) => {
      e.preventDefault();
    }	

    const drag = (e) => {
		console.log(e.currentTarget);
		console.log(e.target);
		console.log(e.target.src)
		//e.preventDefault();
		e.dataTransfer.setData("123", e.target.src);
	}	

    const drop = (e) => {
		e.preventDefault();
		var data = e.dataTransfer.getData("123");
		console.log(data)
		setDragImage(null);
		setDropImage(data);
	}

	return (
		<div>

			<p>Drag the ball image into the square box:</p>

			<div className={styles.div1} onDrop={drop} onDragOver={allowDrop}>
			{ dropImage && 
				<img src={dropImage} alt="logo" width="70" height="70"></img>
			}
			</div>
			<br />
			{ dragImage && 
				<img src={dragImage} alt="logo" draggable="true" onDragStart={drag} width="70" height="70"></img>
			}
		</div>
	);
}

export default DragDropImage;