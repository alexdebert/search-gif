/**
 * @overview Header component.
 */

//React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">Search Gif</Link>
					</div>
					<ul className="nav navbar-nav navbar-right">
						<li className="nav-item">
							<Link className="nav-link" to="/login">Login</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/signup">Signup</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps)(Header);