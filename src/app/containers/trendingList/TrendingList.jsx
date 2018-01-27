/**
 * @overview Trending List container.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './TrendingList.scss';

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
		return (
			<div className="trending-list-container col-md-3">
				<h5 className="trending-list-title">Trending Now!</h5>
				<div className="nav nav-pills flex-column">
				{gifs.map(gif =>
					<Gif key = {gif.id}
						id = {gif.id}
					 	originalUrl = {gif.images.original.url}
						url = {gif.images.fixed_height_small.url}
						height = {gif.images.fixed_height_small.height}
						width = {gif.images.fixed_height_small.width} />
				)}
				</div>
			</div>
		)
	}
}

TrendingList.propTypes = {
	gifs: PropTypes.array
};

export default TrendingList;