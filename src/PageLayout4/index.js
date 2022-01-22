import React from 'react';

import styles from './PageLayout4.module.css';

const PageLayout4 = () => {
	return (
		<div className={styles.row}>
			<div className={styles.column1}>
				<div className={styles.leftcard1}>
					<h2>Section 1</h2>
					<p>Some text..</p>
				</div>
				<div className={styles.leftcard1}>
					<h2>Section 2</h2>
					<p>Some text..</p>
				</div>
				<div className={styles.leftcard1}>
					<h2>Section 3</h2>
					<p>Some text..</p>
				</div>
				<div className={styles.leftcard1}>
					<h2>Section 4</h2>
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

export default PageLayout4;