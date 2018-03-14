// Global application styles
import './App.scss';

// React
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from './app/store/store';

// Our app
import Home from './app/containers/home/Home';

const store = configureStore();

render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={Home}>
				<IndexRoute component={Home}/>
				<Route path='home' component={Home}/>
				<Redirect from='*' to='/home'/>
			</Route>
		</Router>
	</Provider >
), document.getElementById('root'));