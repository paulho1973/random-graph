import React from 'react';
import { Link } from "react-router-dom";

import styles from './Node.module.css';

const Node = ({ item, selected, hasChildren, level, onToggle }) => {
	return (
		<div style={{ paddingLeft: `${level * 16}px`}}>

			{hasChildren && <span className={selected ? "caret caret-down" : "caret"} onClick={onToggle}>toggle</span>}

			{/*
			{item.label}
			*/}

			<Link to={item.link}>
				<div className={styles.tooltip} >
					{item.label}
					{ item.desc && 
					<span className={styles.tooltiptext}>{item.desc}</span>
					}
				</div>
			</Link>

			{/*
			{hasChildren && <button onClick={onToggle}>toggle</button>}
			*/}

		</div>
	);
};

export default Node;

