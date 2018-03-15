// Global application styles
import './App.scss';

// React
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router-dom';
import { history } from '../../../store';

// Components
import Home from '../home/Home';
import Header from '../header/Header';
import Signup from '../signup/Signup';
import Login from '../login/Login';
import Favorites from '../favorites/Favorites';

const PrivateRoute = ({component: Component, authenticated, ...props}) => {
	return (
		<Route
			{...props}
			render={(props) => authenticated === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
			/>
	);
};

const PublicRoute = ({component: Component, authenticated, ...props}) => {
	return (
		<Route
			{...props}
			render={(props) => authenticated === false
                ? <Component {...props} />
                : <Redirect to='/favorites' />}
			/>
	);
};

class App extends Component {
	render() {
		return (
			<ConnectedRouter history={history}>
				<div>
					<Header />
					<div className="container">
						<Route exact path="/" component={ Home }/>
						<PublicRoute authenticated={this.props.authenticated }  path="/signup" component={ Signup } />
						<PublicRoute authenticated={this.props.authenticated }  path="/login" component={ Login } />
						<PrivateRoute authenticated={this.props.authenticated }  path="/favorites" component={ Favorites } />
					</div>
				</div>
			</ConnectedRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(App);