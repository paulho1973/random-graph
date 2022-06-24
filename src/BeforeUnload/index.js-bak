import React, { useState, useEffect } from 'react'

import Modal from "./Modal";

const BeforeLeave = () => {

	const [modal, setModal] = useState(false);

	/*
	const showModal = () => {
		setModal(true);
	}
	*/
	  
	const hideModal = () => {
		setModal(false);
	}

	useEffect(() => { 

		window.addEventListener('beforeunload', alertUser) 

		return () => { 
		  	window.removeEventListener('beforeunload', alertUser) 
			console.log("EXIT")
		} 

	  }, [])
	  
	  const alertUser = e => { 
		console.log("BEFOREUNLOAD")
		e.preventDefault();
		if (e) {
			e.returnValue = '';
		}
		return '';
	  }

	return (
		<div>
			<h1>Before Leave</h1>		
			<Modal show={modal} handleClose={hideModal} >
				<p>This is a Modal</p>
			</Modal>
		</div>
	);
}

export default BeforeLeave;