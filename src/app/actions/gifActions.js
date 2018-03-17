/**
 * @overview Gif actions.
 */

import Firebase from 'firebase';

export const FETCH_FAVORITED_GIFS = 'FETCH_FAVORITED_GIFS';
export const GET_GIFS = 'GET_GIFS';

import * as gifsApi from '../api/gifServices'

export let getGifs = (word = null) => {
	return function(dispatch) {
		gifsApi.fetchSearchWord(word).then(response => {
			dispatch({
				type: GET_GIFS,
				payload: response
			});
		});
	}
}

export function favoriteGif({selectedGif}) {
	const userUid = Firebase.auth().currentUser.uid;
	const gifId = selectedGif.id;

	return dispatch => Firebase.database().ref(userUid).update({
		[gifId]: selectedGif
	});
}

export function unfavoriteGif({selectedGif}) {
	const userUid = Firebase.auth().currentUser.uid;
	const gifId = selectedGif.id;

	return dispatch => Firebase.database().ref(userUid).child(gifId).remove();
}

export function fetchFavoritedGifs() {
	return function(dispatch) {
		const userUid = Firebase.auth().currentUser.uid;

		Firebase.database().ref(userUid).on('value', snapshot => {
			dispatch({
				type: FETCH_FAVORITED_GIFS,
				payload: snapshot.val()
			})
		});
	}
}