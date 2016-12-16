import React, { Component } from 'react';

class Header extends Component{

	render() {
		return (
			<nav className="navbar-dark navbar navbar-full bg-primary">
		      	<a className="navbar-brand" href="#">Contributor Stats</a>
		      	<span className="navbar-text float-xs-left">
		      	    Top contributors in Code Heat
		      	  </span>
	        </nav>
		);
	}
}

export default Header;