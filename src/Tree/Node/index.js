import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Node = ({ item, selected, hasChildren, level, onToggle }) => {
	return (
		<div style={{ paddingLeft: `${level * 16}px`}}>

			{hasChildren && <span className={selected ? "caret caret-down" : "caret"} onClick={onToggle}>toggle</span>}

			{/*
			{item.label}
			*/}

			<Link to={item.link}>{item.label}</Link>

			{/*
			{hasChildren && <button onClick={onToggle}>toggle</button>}
			*/}

		</div>
	);
};

export default Node;

