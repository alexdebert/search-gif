/**
 * @overview Application initializer.
 */

//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Component
import App from './app/containers/app/App';

//Store
import { configureStore } from './store';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);