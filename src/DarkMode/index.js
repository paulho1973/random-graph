import React, { useState, useEffect } from "react";

import styled from 'styled-components';

import styles from './DarkMode.module.css';

const DarkMode = () => {

	const [theme, setTheme] = useState("light");
	const isDarkTheme = theme === "dark";
  
	const toggleTheme = () => {
	  const updatedTheme = isDarkTheme ? "light" : "dark";
	  setTheme(updatedTheme);
	  localStorage.setItem("theme", updatedTheme);
	};  

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark =
		  window.matchMedia &&
		  window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (savedTheme && ["dark", "light"].includes(savedTheme)) {
		  setTheme(savedTheme);
		} else if (prefersDark) {
		  setTheme("dark");
		}
	  }, []);

	const lightTheme = {
		body: "whitesmoke",
		text: "black"
	};
	  
	const darkTheme = {
		body: "black",
		text: "white"
	};

	const Container = styled.div`
		width: 100%;
		background-color: ${isDarkTheme ? darkTheme.body : lightTheme.body};
		color: ${isDarkTheme ? darkTheme.text : lightTheme.text};
	`; 
  
	return (
		<Container>
			<label className={styles.switch}>
			<input type="checkbox" defaultChecked={isDarkTheme} onChange={toggleTheme} />
			<span className={styles.slider + ' ' + styles.round}></span>
			</label>	

			<h1>Hello!</h1>

			<button onClick={toggleTheme}>
			{isDarkTheme ? (
				<span aria-label="Light mode" role="img">
				🌞
				</span>
			) : (
				<span aria-label="Dark mode" role="img">
				🌜
				</span>
			)}
			</button>

		</Container>
	);
}

export default DarkMode;