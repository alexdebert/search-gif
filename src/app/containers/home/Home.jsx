/**
 * @overview Home page.
 */

//React
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Actions
import { getGifs } from '../../actions/gifActions.js';
import { openModal, closeModal } from '../../actions/modalActions.js';

//Components
import TrendingList from '../trendingList/TrendingList';
import SearchBar from '../searchBar/SearchBar';
import GifList from '../../components/gifList/GifList';
import GifModal from '../../components/gifModal/GifModal';

//Style
import './Home.scss'

class Home extends Component {
  render() {
    return (
      <div>
        < TrendingList />
        <div className="search-container">
          <SearchBar onWordChange= {this.props.getGifs} />
          <GifList gifs={ this.props.gifs } onGifSelect={ selectedGif => this.props.openModal({selectedGif}) }/>
          <GifModal modalIsOpen={ this.props.modalIsOpen }
                    selectedGif={ this.props.selectedGif }
                    onRequestClose={ () => this.props.closeModal() } />
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs.data,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getGifs,
    openModal,
    closeModal
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);