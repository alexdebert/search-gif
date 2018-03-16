/**
 * Gif actions.
 */

export const GET_GIFS = 'GET_GIFS';
import * as gifsApi from '../api/search'

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