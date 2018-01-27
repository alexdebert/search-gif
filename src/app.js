// Global application styles
import './app.scss';

// React
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

// Our app
import App from './app/App';
import Home from './app/containers/home/Home';

render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path='home' component={Home}/>
			<Redirect from='*' to='/home'/>
		</Route>
	</Router>
), document.getElementById('root'));
