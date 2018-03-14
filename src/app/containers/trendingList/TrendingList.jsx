/**
 * @overview Trending List container.
 */


//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Style
import './TrendingList.scss';

//API
import { fetchTrending } from '../../api/trending'

//Components
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
		const gifs = this.state.gifs;
		const gifClass = "gif-container";
		return (
			<div className="trending-list-container">
				<div className="trending-list-title">
					<h5>Trending Now!</h5>
				</div>
				<div className="nav nav-pills flex-column trending-list">
					{gifs.map(gif =>
						<Gif key = {gif.id}
							gifClass = {gifClass}
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