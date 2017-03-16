import React from 'react';
import { Link, hashHistory } from 'react-router';

const NavBar = ({ currentUser, logOut, demo }) => (
  <hgroup className="login-signup">
    <img className = "logo" src="https://s3.amazonaws.com/surf-dev/NavBar/logo_outline.png" alt="SurfDystopia"></img>
    <input placeholder="Search for stuff"/>
    {currentUser ? loggedIn(currentUser, logOut) : notLoggedIn(demo)}
  </hgroup>
);

export default NavBar;
