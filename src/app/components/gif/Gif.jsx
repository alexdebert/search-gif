/**
 * @overview Gif component.
 */
import React from 'react';
import PropTypes from 'prop-types';

import FavoriteIcon from '../favoriteIcon/FavoriteIcon'

import './Gif.scss';

const Gif = props => {
	return (
		<div className={props.gifClass} id={props.id}>
			{props.showFavorite &&
			<FavoriteIcon />
			}
			<a href={props.originalUrl} target="_blank">
				<img src={props.url} alt={props.title} height={props.height} width={props.width} />
			</a>
		</div>
	);
}


Gif.propTypes = {
	id: PropTypes.string,
	url: PropTypes.string,
	width: PropTypes.string,
	title: PropTypes.string,
	height: PropTypes.string,
	originalUrl: PropTypes.string,
	gifClass: PropTypes.string

};

export default Gif;