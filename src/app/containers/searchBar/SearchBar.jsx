/**
 * @overview SearchBar container.
 */

//React
import React, {Component} from 'react';

//Styles
import './SearchBar.scss'

class SearchBar extends Component {
	
	handleInputChange(word) {
		this.props.onWordChange(word);
	}

	render() {
		return (
			<div className="">
				<input placeholder="Enter text to search for gifs!" onChange={event => this.handleInputChange(event.target.value)} />
			</div>
		)
	}
}

export default SearchBar;