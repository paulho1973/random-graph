import React, { useState } from 'react';

import Modal from "./Modal";

const ModalSlide1 = () => {

	const [modal, setModal] = useState(false);

	const showModal = () => {
		setModal(true);
	}
	  
	const hideModal = () => {
		setModal(false);
	}

	return (
		<div>
			<h1>React Modal Slide 1</h1>
			<Modal show={modal} handleClose={hideModal} >
				<p>This is a Modal</p>
			</Modal>
			<button type='button' onClick={showModal}>Open</button>	
		</div>
	);
}

export default ModalSlide1;