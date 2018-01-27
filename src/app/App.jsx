/**
 * @overview Home page.
 */
import React from 'react';
import FavoritesList from './containers/favoritesList/FavoritesList';
import TrendingList from './containers/trendingList/TrendingList';
import Search from './containers/search/Search';

const App = () => (
	<div>
		<div className="container-fluid">
			<TrendingList />
			<div className="main-section">
				<FavoritesList />
				<Search />
			</div>
		</div>
	</div>
);

export default App;