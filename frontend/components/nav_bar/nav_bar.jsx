import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    // this.notLoggedIn = this.notLoggedIn.bind(this);
    // this.LoggedIn = this.LoggedIn.bind(this);
    // this.currentUser = this.props.currentUser;
    // this.logOut = this.props.logOut;
    // this.demo = this.props.demo;
  }

  handleLogIn(e){
    e.preventDefault();
    hashHistory.push('/');
  }

  handleSignUp(e){
    e.preventDefault();
    hashHistory.push('/');
  }

  notLoggedIn(demo){
   return(
      <SessionFormContainer/>
      // <div className="auth">
      //   <button className="header-button" onClick={ this.handleLogIn }>Log In</button>
      //   &nbsp;&nbsp;
      //   <button className="header-button" onClick={ this.handleSignUp }>Join</button>
      //   &nbsp;&nbsp;
      //   <button className="header-button" onClick={demo}>Demo</button>
      //   &nbsp;&nbsp;
      // </div>
  );
  }

  loggedIn(currentUser, logOut){
    return(
    <div className="auth">
      <ul className="drowdown">
        <li>
          <img src="https://s3.amazonaws.com/surf-dev/Users/User1.png"></img>
        </li>
        <li>
          <h5 className="header-name">{this.props.currentUser.name}</h5>
        </li>
        <li>
          <button className="header-button" onClick={logOut}>Log Out</button>
        </li>
      </ul>


    </div>
  );
  }

  render() {
  return(
    <hgroup className="login-signup">
      <img className = "logo" src="https://s3.amazonaws.com/surf-dev/NavBar/logo_outline.png" alt="SurfDystopia"></img>
      <input placeholder="Search for stuff"/>
      {this.props.currentUser ? this.loggedIn(this.props.currentUser, this.props.logOut) : this.notLoggedIn(this.props.demo)}
    </hgroup>
  );
}
}
export default NavBar;
