/**
 * @overview Home page.
 */

import React, {Component} from 'react';
import FavoritesList from '../favoritesList/FavoritesList';
import TrendingList from '../trendingList/TrendingList';
import Search from '../search/Search';

class Home extends Component {
	render() {
		return (
			<div className="home-section">
				<p>Home container</p>
				<FavoritesList />
				<TrendingList />
				<Search />
			</div>
		)
	}
}

export default Home;