import React from 'react';

const Iteration = () => {

    var rows = [];
    for (var i = 0; i < 30; i++) {
        rows.push(<h2 key={i}>Row {i}</h2>);
    }
    
	return (
		<div>
			{rows}	
		</div>
	);
}

export default Iteration;