/**
 * @overview Home page.
 */
import React, {Component} from 'react';
import TrendingList from './containers/trendingList/TrendingList';
import SearchBar from './containers/searchBar/SearchBar';
import GifList from './components/gifList/GifList';
import GifModal from './components/gifModal/GifModal';

import { fetchSearchWord } from './api/search'

class App extends Component {
	constructor() {
	    super();

	    this.state = {
	        gifs: [],
          selectedGif: null,
          modalIsOpen: false
	    }

      this.openModal = this.openModal.bind(this);
	}

  openModal(gif) {
        this.setState({
            modalIsOpen: true,
            selectedGif: gif
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            selectedGif: null
        });
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
        	<GifList gifs={this.state.gifs} 
                    onGifSelect = {this.openModal}/>
          <GifModal modalIsOpen={this.state.modalIsOpen}
                    selectedGif={this.state.selectedGif}
                    onRequestClose={ () => this.closeModal() } />
      	</div>
      </div>
    );
  }
};

export default App;