import React from 'react';

import styles from './SearchBar.module.css';

const SearchBar = () => {
	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={()=>{}}>
				{" "}
				<label className={styles.label} htmlFor="query">
				{" "}
				📷
				</label>
				<input
				type="text"
				name="query"
				className={styles.input}
				placeholder={`Try "dog" or "apple"`}
				value={null}
				onChange={() => {}}
				/>
				<button type="submit" className={styles.button}>
				Search
				</button>
			</form>	
		</div>
	);
}

export default SearchBar;