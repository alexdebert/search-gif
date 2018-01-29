/**
 * @overview Home page.
 */
import React from 'react';
import TrendingList from './containers/trendingList/TrendingList';
import Search from './containers/search/Search';

const App = () => (
	<div>
		<div className="container-fluid">
			<TrendingList />
			<Search />
		</div>
	</div>
);

export default App;