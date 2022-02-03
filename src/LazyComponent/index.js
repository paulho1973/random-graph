import React, { Suspense } from 'react';

const Test = React.lazy(() => import('../Test'));

const LazyComponent = () => {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<Test />
			</Suspense>	
		</div>
	);
}

export default LazyComponent;
