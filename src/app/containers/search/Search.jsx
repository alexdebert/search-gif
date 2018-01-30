/**
 * @overview Search container.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

import { fetchSearchWord } from '../../api/search'

import FavoritesList from '../../components/favoritesList/FavoritesList'
import SearchResultList from '../../components/searchResultList/SearchResultList'

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
					o.isFavorite = this.checkGifFavoriteStatus(el);
					return o;
				});

				this.setState({
					gifs: modifiedGifs,
					showResult: true
				})
			})
			.catch(error => console.error(error.message));
	}

	handleFavoriteClick(id) {
		let gif = this.getGif(id)

		gif.isFavorite ? this.removeGifFromFavoriteList(gif) : this.addGifToFavoriteList(gif);
	}

	getGif(id) {
		const gifs = this.state.gifs;
		return gifs.find(gif => gif.id == id)
	}

	addGifToFavoriteList(gif) {
		const favorites = this.state.favorites;
		
		favorites.push(gif);

		this.updateGifFavoriteStatus(gif)

		this.setState({
			favorites
		});
	}

	removeGifFromFavoriteList(gif) {
		const favorites =this.state.favorites;

		for(let i=0; i < favorites.length; i++) {
			if (favorites[i].id == gif.id) {
				favorites.splice(i,1);
				break;
			}
		}

		this.updateGifFavoriteStatus(gif)

		this.setState({
			favorites
		});

	}

	checkGifFavoriteStatus(gif) {
		const favorites =this.state.favorites;

		return favorites.find(favorite => favorite.id == gif.id) ? true : false
	}

	updateGifFavoriteStatus(gif) {
		const gifs =this.state.gifs;

		for (let i=0; i < gifs.length; i++) {
			if (gifs[i].id == gif.id) {
				gifs[i].isFavorite = !gifs[i].isFavorite;
				break
			}
		}

		this.setState({
			gifs
		});
	}

	render() {
		const gifs = this.state.gifs;
		const show = this.state.showResult;
		const gifClass = "gif-search-result";
		const favorites = this.state.favorites;

		return (
			<div className="main-section">
				<FavoritesList favoriteList={favorites}
					handleFavoriteClick = {this.handleFavoriteClick}/>
				<div className="jumbotron search-container">
					<h1>Search your favorite Gif</h1>
					<div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="Search..." aria-label="Search"
							onChange={this.handleChange} />
						<div className="input-group-append">
							<button className="btn btn-outline-secondary" type="button" onClick={this.searchGif}>Search</button>
						</div>
					</div>
					<SearchResultList gifs={gifs}
						show={show}
						gifClass = {gifClass}
						handleFavoriteClick = {this.handleFavoriteClick}/>
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