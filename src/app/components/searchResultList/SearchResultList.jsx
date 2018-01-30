/**
 * @overview Search result List container.
 */

import React from 'react';
import PropTypes from 'prop-types';

import FavoriteIcon from '../favoriteIcon/FavoriteIcon'
import Gif from '../gif/Gif'

const SearchResultList = props => {
	let gifs = props.gifs;

	return (
		<div className="search-result-list-container">
			{!gifs.length && props.show && <h2>No result found.</h2> }
			{gifs.map((gif) =>
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

SearchResultList.propTypes = {
	gifs: PropTypes.array,
	show: PropTypes.boolean,
	gifClass: PropTypes.string
};

export default SearchResultList;