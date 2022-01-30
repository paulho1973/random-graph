import React from 'react';

const Iteration = () => {

    var rows = [];
    for (var i = 0; i < 30; i++) {
        rows.push(<h2 key={i}>Row {i}</h2>);
    }
    var data = ["Apple",
				"Orange",
				"Banana",
				"Pineapple",
				"Honeydew"
			   ]

	var datarows = data.map((item, i) => 
						<h2 key={i}>
							{item}
						</h2>
					)

	return (
		<div>
			{rows}	

			{
				data.map((item, i) => 
					<h2 key={i}>
						{item}
					</h2>
				)
            }

			{datarows}
		</div>
	);
}

export default Iteration;