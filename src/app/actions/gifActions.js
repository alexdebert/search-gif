/**
 * Gif actions.
 */

export const GET_GIFS = 'GET_GIFS';
import * as gifsApi from '../api/search'

export let getGifs = (word = null) => {
  const data = gifsApi.fetchSearchWord(word);
  return {
    type: GET_GIFS,
    payload: data
  }
}