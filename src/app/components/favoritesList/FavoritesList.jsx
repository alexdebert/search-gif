/**
 * @overview Favorites List container.
 */

import React, {Component} from 'react';

import './FavoritesList.scss'

import Gif from '../gif/Gif'

const FavoritesList = props => {
		let favorites = props.favoriteList;

		return (
			<div className="jumbotron favorites-container">
				<h1>Favorites list</h1>
				{!favorites.length && <p>You have no favorites Gif yet.</p> }
				{favorites.map(gif =>
						<Gif key = {gif.id}
							 id = {gif.id}
							 originalUrl = {gif.images.original.url}
							 url = {gif.images.fixed_height_small.url}
							 height = {gif.images.fixed_height_small.height}
							 width = {gif.images.fixed_height_small.width} />
				)}
			</div>
		)
};

export default FavoritesList;