/**
 * @overview Search container.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

import { fetchSearchWord } from '../../api/search'

import FavoritesList from '../../components/favoritesList/FavoritesList'
import Gif from '../../components/gif/Gif'
import FavoriteIcon from '../../components/favoriteIcon/FavoriteIcon'

class Search extends Component {
	constructor() {
		super();
		this.state = {
			gifs: [],
			searchWord: '',
			showResult: false,
			favorites: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.searchGif = this.searchGif.bind(this);
		this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
	}

	handleChange(event) {
		const value = event.target.value;

			this.setState({
				searchWord: value
		});
	}

	searchGif() {
		const word = this.state.searchWord;
		fetchSearchWord(word)
			.then(response => {

				let modifiedGifs = response.data.data.map(el => {
					var o = Object.assign({}, el);
					o.isFavorite = false;
					return o;
				});

				this.setState({
					gifs: modifiedGifs,
					showResult: true
				})
			})
			.catch(error => console.error(error.message));
	}

	handleFavoriteClick(index) {
		let gifs = this.state.gifs,
			favorites = this.state.favorites,
			gifId = gifs[index].id;

		gifs[index].isFavorite = !gifs[index].isFavorite;

		if(gifs[index].isFavorite) {
			favorites.push(gifs[index])
		} else {
			for(let i=0; i < favorites.length; i++) {
				if (favorites[i].id == gifId) {
					favorites.splice(i,1);
					break;
				}
			}
		}

		this.setState({
			gifs,
			favorites
		});
	}

	render() {
		const gifs = this.state.gifs;
		const show = this.state.showResult;
		const gifClass = "gif-search-result";
		const favorites = this.state.favorites;

		return (
			<div className="main-section">
				<FavoritesList favoriteList={favorites}/>
				<div className="jumbotron search-container">
					<h1>Search your favorite Gif</h1>
					<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Search..." aria-label="Search"
						onChange={this.handleChange} />
						<div className="input-group-append">
							<button className="btn btn-outline-secondary" type="button" onClick={this.searchGif}>Search</button>
						</div>
					</div>
					{!gifs.length && show && <h2>No result found.</h2> }
					{gifs.map((gif, index) =>
						<div className="gif-result" key={gif.id}>
							<FavoriteIcon
								id={`favorite-gif-${gif.id}`}
								isFavorite = {gifs[index].isFavorite}
								handleFavoriteClick = {() => this.handleFavoriteClick(index)}/>
							<Gif gifClass={gifClass}
								 id = {gif.id}
								 originalUrl = {gif.images.original.url}
								 url = {gif.images.fixed_height.url}
								 height = {gif.images.fixed_height.height}
								 width = {gif.images.fixed_height.width} />
						</div>
					)}
				</div>
			</div>
		)
	}
}

Search.propTypes = {
	gifs: PropTypes.array,
	searchWord: PropTypes.string,
	showResult: PropTypes.bool
};

export default Search;