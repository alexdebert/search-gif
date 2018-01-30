/**
 * @overview Favorites List container.
 */

import React from 'react';
import PropTypes from 'prop-types';

import './FavoritesList.scss'

import FavoriteIcon from '../favoriteIcon/FavoriteIcon'
import Gif from '../gif/Gif'

const FavoritesList = props => {
	let favorites = props.favoriteList;

	return (
		<div className="jumbotron favorites-container">
			<h1>Favorites list</h1>
			{!favorites.length && <p>You have no favorites Gif yet.</p> }
			{favorites.map((gif) =>
				<div className="gif-favorite-list" key={gif.id}>
					<FavoriteIcon
						id={`favorite-gif-${gif.id}`}
						isFavorite = {gif.isFavorite}
						handleFavoriteClick = {() => props.handleFavoriteClick(gif.id)}/>
					<Gif id = {gif.id}
						originalUrl = {gif.images.original.url}
						url = {gif.images.fixed_height_small.url}
						height = {gif.images.fixed_height_small.height}
						width = {gif.images.fixed_height_small.width} />
				</div>
			)}
		</div>
	)
};

FavoritesList.propTypes = {
	favoriteList: PropTypes.array
};

export default FavoritesList;