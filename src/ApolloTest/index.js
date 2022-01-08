import React, { useEffect } from 'react';
import {
	ApolloClient,
	InMemoryCache,
	gql
} from "@apollo/client";


const ApolloTest = () => {

	useEffect(() => {

		const client = new ApolloClient({
			uri: 'https://48p1r2roz4.sse.codesandbox.io',
			cache: new InMemoryCache()
		});
		
		const qr = gql`
		  query GetRates {
			rates(currency: "USD") {
			  currency
			}
		  }
		`

		client
		.query({
		  query: qr ,
		  variables: {}
		})
		.then(result => console.log(result));

	}, []);


	return (
		<div>
			<h1>Check console log</h1>
		</div>
	);
}

export default ApolloTest;