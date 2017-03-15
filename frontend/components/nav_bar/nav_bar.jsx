import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

const notLoggedIn = () => (
  <nav className="login-signup">
    <img src="assets/images/nav_bar/Logo.png" alt="SurfDystopia" style={{float: 'left'}}></img>
    <Link to="/login" activeClassName="current" activeStyle={ {color: 'red'} } >Log In</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign Up</Link>
  </nav>
);

const loggedIn = (currentUser, logOut) => (
	<hgroup className="header-group">
    <img src="assets/images/nav_bar/Logo.png" alt="SurfDystopia" style={{float: 'left'}}></img>
    <input placeholder="Search for stuff"  />
    <h4 className="header-name" style={{float: 'left'}}>{currentUser.name}</h4>
    <button className="header-button" onClick={logOut} >Log Out</button>
	</hgroup>
);

const NavBar = ({ currentUser, logOut }) => (
  currentUser ? loggedIn(currentUser, logOut) : notLoggedIn()
);

export default NavBar;
