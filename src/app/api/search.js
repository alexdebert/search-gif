import axios from 'axios';

const key = `qy0IKdJNNPIKloYUUL0VKKv1wWJd8L25`;
const limit = 20;
const baseURL = `http://api.giphy.com/v1/gifs/search?q=`;

export function fetchSearchWord(word) {
	return axios.get(`${baseURL}${word}&api_key=${key}&limit=${limit}`)
}