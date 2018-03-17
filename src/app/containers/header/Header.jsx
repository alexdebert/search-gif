/**
 * @overview Header component.
 */

//React
import React, {Component} from 'react';
import { connect } from 'react-redux';

//Actions
import { signOutUser } from '../../actions/authActions';

//Components
import { Link } from 'react-router-dom';

class Header extends Component {
	handleSignout() {
		this.props.signOutUser();
	}

	renderAuthLinks() {
		const isAuthenticated = this.props.authenticated;
		const loggedIn = isAuthenticated ? (<Link className="nav-link" to="/favorites">My Favorites</Link>) : (<Link className="nav-link" to="/login">Login</Link>)
		const signedUp = isAuthenticated ? (<a className="nav-link" href="#" onClick={() => this.handleSignout()}>Sign Out</a>) : (<Link className="nav-link" to="/signup">Sign Up</Link>)

		return (
			<ul className="nav navbar-nav navbar-right">
				<li className="nav-item" key={1}>
					{loggedIn}
				</li>
				<li className="nav-item" key={2}>
					{signedUp}
				</li>
			</ul>
		)
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">Search Gif</Link>
					</div>
					{ this.renderAuthLinks() }
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => {
	return {
		authenticated: state.auth.authenticated
	}
}

export default connect(mapStateToProps, {signOutUser})(Header);