/**
 * @overview Gif List component.
 */

//React
import React, {Component} from 'react';

//Component
import Gif from '../gif/Gif';

//Style
import './GifList.scss'

const GifList = props => {
	const gifItems = props.gifs.map((image) => {
		return <Gif key={image.id}
						gif={image}
						onGifSelect={props.onGifSelect}
						onFavoriteSelect={props.onFavoriteSelect}
						onFavoriteDeselect={props.onFavoriteDeselect}
						isAuthenticated={props.isAuthenticated}
						isFavorite={props.isFavorite} />
	});

	return (
		<div className="gif-list">{gifItems}</div>
	);
};

export default GifList;