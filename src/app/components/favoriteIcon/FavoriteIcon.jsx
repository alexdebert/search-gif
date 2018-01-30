/**
 * @overview Favorite Icon component.
 */

import React from 'react';
import PropTypes from 'prop-types';

import './FavoriteIcon.scss';

const FavoriteIcon = props => {
	return (
		<div className="svg-heart-container" id={props.id}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" className="svg-heart">
				<path onClick={props.handleFavoriteClick} className={props.isFavorite ? 'favorite' : 'notFavorite'}
					d="M2 0c-.55 0-1.04.23-1.41.59-.36.36-.59.85-.59 1.41 0 .55.23 1.04.59 1.41l3.41 3.41 3.41-3.41c.36-.36.59-.85.59-1.41 0-.55-.23-1.04-.59-1.41-.36-.36-.85-.59-1.41-.59-.55 0-1.04.23-1.41.59-.36.36-.59.85-.59 1.41 0-.55-.23-1.04-.59-1.41-.36-.36-.85-.59-1.41-.59z"
					transform="translate(0 1)" />
			</svg>
		</div>
	);
};


FavoriteIcon.propTypes = {
	id: PropTypes.string,
	handleFavoriteClick: PropTypes.func,
	isFavorite: PropTypes.bool

};

export default FavoriteIcon;