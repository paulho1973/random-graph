import React from 'react';

import styles from './ToggleSwitch.module.css';

const ToggleSwitch = () => {
	return (
		<div>
			<label class={styles.switch}>
			<input type="checkbox" />
			<span class={styles.slider}></span>
			</label>

			<label class={styles.switch}>
			<input type="checkbox" defaultChecked={true} />
			<span class={styles.slider}></span>
			</label><br /><br />

			<label class={styles.switch}>
			<input type="checkbox" />
			<span class={styles.slider + ' ' + styles.round}></span>
			</label>

			<label class={styles.switch}>
			<input type="checkbox" defaultChecked={true} />
			<span class={styles.slider + ' ' + styles.round}></span>
			</label>	
		</div>
	);
}

export default ToggleSwitch;