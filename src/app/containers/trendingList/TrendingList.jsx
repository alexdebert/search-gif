/**
 * @overview Trending List container.
 */

//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Style
import './TrendingList.scss';

//API
import { fetchTrending } from '../../api/gifServices'

//Components
import Gif from '../../components/gif/Gif'

class TrendingList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gifs: []
		}
	}

	componentDidMount() {
		let limit = 10;
		fetchTrending(limit)
			.then(response => this.setState({gifs: response.data.data}))
			.catch(error => console.error(error.response));
	}

	render() {
		const gifs = this.state.gifs;
		return (
			<div className="trending-list-container">
				<div className="trending-list-title">
					<h5>Trending Now!</h5>
				</div>
				<div className="nav nav-pills flex-column trending-list">
					{gifs.map(gif =>
						<Gif key = {gif.id}
						 	gif = {gif}
						 	onGifSelect={this.props.onGifSelect} />
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