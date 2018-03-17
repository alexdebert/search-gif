/**
 * @overview Authentication actions.
 */

import Firebase from 'firebase';

export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';

const config = {
	apiKey: "AIzaSyDt8-CGYDmBDMaeTLWAi54bwzoWbIa1Y0Y",
	authDomain: "search-gif-react.firebaseapp.com",
	databaseURL: "https://search-gif-react.firebaseio.com",
	projectId: "search-gif-react",
	storageBucket: "search-gif-react.appspot.com",
	messagingSenderId: "680673954941"
};

Firebase.initializeApp(config);

export function signUpUser(credentials) {
	return function(dispatch) {
		Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
			.then(response => {
				dispatch(authUser());
			})
			.catch(error => {
				console.log(error);
				dispatch(authError(error));
			});
	}
}

export function signInUser(credentials) {
	return function(dispatch) {
		Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(response => {
				dispatch(authUser());
			})
			.catch(error => {
				dispatch(authError(error));
			});
	}
}

export function verifyAuth() {
	return function (dispatch) {
		Firebase.auth().onAuthStateChanged(user => {
			if (user) {
				dispatch(authUser());
			} else {
				dispatch(signOutUser());
			}
		});
	}
}

export function signOutUser() {
	return function (dispatch) {
		Firebase.auth().signOut()
			.then(() =>{
				dispatch({
					type: SIGN_OUT_USER
				})
			});
	}
}

export function authUser() {
	return {
		type: AUTH_USER
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}