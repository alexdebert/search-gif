import { combineReducers } from 'redux';
import GifsReducer from './gif';
import ModalReducer from './modal';
import AuthReducer from './auth';
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
	auth: AuthReducer,
	form: FormReducer,
	gifs: GifsReducer,
	modal: ModalReducer,
	router: routerReducer
});

export default rootReducer;