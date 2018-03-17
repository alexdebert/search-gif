/**
 * @overview Trending services.
 */

import axios from 'axios';

const key = `qy0IKdJNNPIKloYUUL0VKKv1wWJd8L25`;
const limit = 10;
const baseURL = `http://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${limit}`;

export function fetchTrending() {
	return axios.get(baseURL)
}