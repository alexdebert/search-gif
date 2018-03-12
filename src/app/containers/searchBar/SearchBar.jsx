/**
 * @overview SearchBar container.
 */

import React, {Component} from 'react';

class SearchBar extends Component {
	constructor() {
		super();
		this.state = {
			word: ''
		}
	}

	handleInputChange(word) {
		this.setState({
			word
		});
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