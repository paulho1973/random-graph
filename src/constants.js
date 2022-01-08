/*
export const DATA = [
	{
		id: '1',
		label: 'Food',
		children: [
			{
				id: '2',
				label: 'Meat',
			},
			{
				id: '3',
				label: 'Salad',
				children: [
					{
						id: '4',
						label: 'Tomatoes',
					},
					{
						id: '5',
						label: 'Cabbage',
					},
				],
			},
		],
	},
	{
		id: '6',
		label: 'Drinks',
		children: [
			{
				id: '7',
				label: 'Beer',
			},
			{
				id: '8',
				label: 'Soft drink',
			},
		],
	},
];
*/


export const DATA = [
	{
		id: '1',
		label: 'Home',
		link: '/',
	},
	{
		id: '2',
		label: 'About',
		link: '/about',
	},
	{
		id: '3',
		label: 'Nothing Here',
		link: '/nothing-here',
		desc: 'catching for invalid url',
	},
	{
		id: '4',
		label: 'Test',
		link: '/test',
		source: 'https://github.com/paulho1973/random-graph/tree/master/src/Test',
		desc: 'Sample React Component',
	},
	{
		id: '5',
		label: 'Counter',
		link: '/counter',
		source: 'https://github.com/paulho1973/random-graph/tree/master/src/Counter',
		desc: 'Sample Redux Store'
	},
	{
		id: '6',
		label: 'ApolloClient',
		link: '/apolloclient',
		source: 'https://github.com/paulho1973/random-graph/tree/master/src/ApolloTest',
		desc: 'Sample React Apollo Client',
	},
];
