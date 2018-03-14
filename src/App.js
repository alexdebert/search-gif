// Global application styles
import './App.scss';

// React
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

// Our app
import Home from './app/containers/home/Home';

render((
	<Router history={browserHistory}>
		<Route path='/' component={Home}>
			<IndexRoute component={Home}/>
			<Route path='home' component={Home}/>
			<Redirect from='*' to='/home'/>
		</Route>
	</Router>
), document.getElementById('root'));
