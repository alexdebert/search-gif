/**
 * @overview Trending List container.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { fetchTrending } from '../../api/trending'

import Gif from '../../components/gif/Gif'

class TrendingList extends Component {
	constructor() {
		super();
		this.state = {
			gifs: []
		}
	}

	componentDidMount() {
		fetchTrending()
			.then(response => this.setState({gifs: response.data.data}))
			.catch(error => console.error(error.response));
	}

	render() {
		const gifs = this.state.gifs
		console.log(gifs)
		return (
			<nav className="col-sm-3 col-md-3 hidden-xs-down bg-faded sidebar">
				<h5>Trending Now!</h5>
				<ul className="nav nav-pills flex-column">
				{gifs.map(gif =>
					<Gif key = {gif.id}
						id = {gif.id}
						biggerGifUrl = {gif.images.original.url}
						url = {gif.images.fixed_height_small.url}
						height = {gif.images.fixed_height_small.height}
						width = {gif.images.fixed_height_small.width} />
				)}
				</ul>
			</nav>
		)
	}
}

TrendingList.propTypes = {
	gifs: PropTypes.array
};

export default TrendingList;