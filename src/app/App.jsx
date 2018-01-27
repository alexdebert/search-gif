/**
 * @overview Main app layout.
 */
import React from 'react';
import Home from './containers/home/Home';

const App = children => (
	<div>
		<div className='app-container'>
			<Home />
		</div>
	</div>
);

export default App;