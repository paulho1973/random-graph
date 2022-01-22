import React from 'react';

import styles from './PageLayout2.module.css';

const PageLayout2 = () => {
	return (
		<div className={styles.row}>
			<div className={styles.column1}>
				<div className={styles.leftcard1}>
					<h2>Section 1</h2>
					<p>Some text..</p>
				</div>
			</div>
			<div className={styles.column1}>
				<div className={styles.leftcard1}>
					<h2>Section 2</h2>
					<p>Some text..</p>
				</div>
			</div>
		</div>
	);
}

export default PageLayout2;