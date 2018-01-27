// Global application styles
import './app.scss';

// React
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

// Our app
import App from './app/App';

render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={App}/>
			<Route path='home' component={App}/>
			<Redirect from='*' to='/home'/>
		</Route>
	</Router>
), document.getElementById('root'));
