// Global application styles
import './App.scss';

// React
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history, configureStore } from './app/store/store';

// Components
import Home from './app/containers/home/Home';
import Header from './app/containers/header/Header';
import Signup from './app/containers/signup/Signup';
import Login from './app/containers/login/Login';


const store = configureStore();

render((
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Header />
				<div className="container">
					<Route exact path="/" component={ Home }/>
					<Route path="/signup" component={ Signup } />
					<Route path="/login" component={ Login } />
				</div>
			</div>
		</ConnectedRouter>
	</Provider >
), document.getElementById('root'));