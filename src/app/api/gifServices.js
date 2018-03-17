/**
 * @overview Gif services.
 */

import axios from 'axios';

const key = `qy0IKdJNNPIKloYUUL0VKKv1wWJd8L25`;
const baseURL = `http://api.giphy.com/v1/gifs/`;

export let fetchSearchWord = (word) => {
	let limit =20;
	return axios.get(`${baseURL}search?q=${word}&api_key=${key}&limit=${limit}`)
}

export function fetchTrending(limit) {
	return axios.get(`${baseURL}trending?api_key=${key}&limit=${limit}`)
}