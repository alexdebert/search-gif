/**
 * @overview Search container.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

import { fetchSearchWord } from '../../api/search'

import Gif from '../../components/gif/Gif'

class Search extends Component {
	constructor() {
		super();
		this.state = {
			gifs: [],
			searchWord: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.searchGif = this.searchGif.bind(this);
	}

	handleChange(event) {
			const value = event.target.value;

			this.setState({
				searchWord: value
		});
	}

	searchGif() {
		const word = this.state.searchWord
		fetchSearchWord(word)
			.then(response => this.setState({gifs: response.data.data}))
			.catch(error => console.error(error.response));
	}

	render() {
		const gifs = this.state.gifs
		console.log(gifs)
		return (
			<div className="jumbotron search-container">
				<h1>Search your favorite Gif</h1>
				<div className="input-group mb-3">
				<input type="text" className="form-control" placeholder="Search..." aria-label="Search"
					onChange={this.handleChange} />
					<div className="input-group-append">
						<button className="btn btn-outline-secondary" type="button" onClick={this.searchGif}>Search</button>
					</div>
				</div>
				<div>
					{gifs.map(gif =>
							<Gif key = {gif.id}
								 id = {gif.id}
								 originalUrl = {gif.images.original.url}
								 url = {gif.images.fixed_height.url}
								 height = {gif.images.fixed_height.height}
								 width = {gif.images.fixed_height.width} />
					)}
				</div>
			</div>
		)
	}
}

Search.propTypes = {
	gifs: PropTypes.array,
	searchWord: PropTypes.string
};

export default Search;