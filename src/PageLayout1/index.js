import React from 'react';

import styles from './PageLayout1.module.css';

const PageLayout1 = () => {
	return (
		<div className={styles.row}>
			<div className={styles.column1}>
				<div className={styles.leftcard1}>
					<h2>Column 1</h2>
					<p>Some text..</p>
				</div>
			</div>
			<div className={styles.column2}>
				<div className={styles.rightcard1}>
					<h2>Column 2</h2>
					<p>Some text..</p>
				</div>
			</div>
		</div>
	);
}

export default PageLayout1;