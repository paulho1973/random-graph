import React, { useEffect, useRef } from "react";

const ReactRef = () => {

	const myContainer = useRef(null);

	useEffect(() => {
		console.log("myContainer..", myContainer.current);
	});

	return (
		<div>
			<h1>Ref with react</h1>
      		<div ref={myContainer}>I can use the DOM with react ref</div>	
		</div>
	);
}

export default ReactRef;
