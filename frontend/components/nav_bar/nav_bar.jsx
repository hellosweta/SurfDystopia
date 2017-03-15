import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

const handleLogIn = (e) => {
  e.preventDefault();
  hashHistory.push('login');
};

const handleSignUp = (e) => {
  e.preventDefault();
  hashHistory.push('signup');
};

const notLoggedIn = (demo) => (
  <hgroup className="login-signup">
    <section className="hero">
      <img src="https://s3.amazonaws.com/surf-dev/NavBar/logo_outline.png" alt="SurfDystopia"></img>
      <section className="hero-text">
        <h1>If Not Now...When?</h1>
        <Link to='/search'>Stay with locals and meet travelers </Link>
      </section>
    </section>
    <div className="auth">
      <button className="header-button" onClick={ handleLogIn }>Log In</button>
      &nbsp;&nbsp;
      <button className="header-button" onClick={ handleSignUp }>Join</button>
      &nbsp;&nbsp;
      <button className="header-button" onClick={demo}>Demo</button>
      &nbsp;&nbsp;
    </div>
  </hgroup>
);

const loggedIn = (currentUser, logOut) => (
	<hgroup className="login-signup">
    <img className="logo" src="https://s3.amazonaws.com/surf-dev/NavBar/logo_outline.png" alt="SurfDystopia"></img>
    <input placeholder="Search for stuff"/>
    <div className="auth">
      <button className="header-button right-nav" onClick={logOut}>Log Out</button>
      <h5 className="header-name">{currentUser.name}</h5>
    </div>
	</hgroup>
);

const NavBar = ({ currentUser, logOut, demo }) => (
  currentUser ? loggedIn(currentUser, logOut) : notLoggedIn(demo)
);

export default NavBar;
