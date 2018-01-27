/**
 * @overview Gif component.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Gif = props => {
	return (
		<div id={props.id}>
			<a href={props.biggerGifUrl} target="_blank">
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
	biggerGifUrl: PropTypes.string

};

export default Gif;