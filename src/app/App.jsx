/**
 * @overview Home page.
 */
import React, {Component} from 'react';
import TrendingList from './containers/trendingList/TrendingList';
import SearchBar from './containers/searchBar/SearchBar';
import GifList from './components/gifList/GifList';

import { fetchSearchWord } from './api/search'

class App extends Component {
	constructor() {
	    super();

	    this.state = {
	        gifs: []
	    }
	}

  handleWordChange = word => {
    fetchSearchWord(word)
			.then(response => {
				this.setState({
					gifs: response.data.data
				})
			})
			.catch(error => console.error(error.message));
  }

  render() {
    return (
      <div>
      	< TrendingList />
      	<div className="search-container">
        	<SearchBar onWordChange={this.handleWordChange} />
        	<GifList gifs={this.state.gifs} />
      	</div>
      </div>
    );
  }
};

export default App;