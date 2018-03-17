/**
 * @overview Favorites page.
 */

//React
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Actions
import { openModal, closeModal } from '../../actions/modalActions.js';
import { favoriteGif, unfavoriteGif, fetchFavoritedGifs } from '../../actions/gifActions';

//Component
import GifList from '../../components/gifList/GifList';
import GifModal from '../../components/gifModal/GifModal';

class Favorites extends Component {
	componentDidMount() {
		this.props.fetchFavoritedGifs();
	}

	render() {
		return (
			<div>
				<GifList gifs={ this.props.gifs }
						 onGifSelect={ selectedGif => this.props.openModal({selectedGif}) }
						 onFavoriteSelect={ selectedGif => this.props.favoriteGif({selectedGif}) }
						 onFavoriteDeselect={ selectedGif => this.props.unfavoriteGif({selectedGif}) }
						 isAuthenticated={ this.props.authenticated }
						 isFavorite={true} />
				<GifModal modalIsOpen={ this.props.modalIsOpen }
						  selectedGif={ this.props.selectedGif }
						  onRequestClose={ () => this.props.closeModal() } />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		authenticated: state.auth.authenticated,
		gifs: state.gifs.favorites,
		modalIsOpen: state.modal.modalIsOpen,
		selectedGif: state.modal.selectedGif
	};
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		openModal,
		closeModal,
		favoriteGif,
		unfavoriteGif,
		fetchFavoritedGifs
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);