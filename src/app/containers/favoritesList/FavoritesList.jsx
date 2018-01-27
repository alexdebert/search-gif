/**
 * @overview Favorites List container.
 */

import React, {Component} from 'react';

import './FavoritesList.scss'

class FavoritesList extends Component {
	render() {
		return (
			<div className="jumbotron favorites-container">
				<h1>Favorites list</h1>
				<p>You have no favorites Gif yet.</p>
			</div>
		)
	}
}

export default FavoritesList;