/**
 * @overview Search result List container.
 */

import React, {Component} from 'react';

import FavoriteIcon from '../favoriteIcon/FavoriteIcon'
import Gif from '../gif/Gif'

const SearchResultList = props => {
		let gifs = props.gifs;

		return (
			<div className="search-result-list-container">
				{!gifs.length && props.show && <h2>No result found.</h2> }
				{gifs.map((gif, index) =>
					<div className="gif-result" key={gif.id}>
						<FavoriteIcon
							id={`search-result-gif-${gif.id}`}
							isFavorite = {gif.isFavorite}
							handleFavoriteClick = {() => props.handleFavoriteClick(gif.id)}/>
						<Gif gifClass={props.gifClass}
							 id = {gif.id}
							 originalUrl = {gif.images.original.url}
							 url = {gif.images.fixed_height.url}
							 height = {gif.images.fixed_height.height}
							 width = {gif.images.fixed_height.width} />
					</div>
				)}
			</div>
		)
};

export default SearchResultList;