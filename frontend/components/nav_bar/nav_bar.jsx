import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

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

  // <img className='thumbnail' src="https://s3.amazonaws.com/surf-dev/Users/User1.png"></img>
  loggedIn(currentUser, logOut){
    return(
      <div className="auth">
        <ul className="drowdown">
          <li>
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
    <div className="login-signup">
      <Link to='/' className="logo">
        <img src="https://s3.amazonaws.com/surf-dev/NavBar/LogoRobot.png" alt="SurfDystopia" style={{maxHeight: '40px'}}></img>
      </Link>
      <input className="Input" placeholder="Search for stuff" />
      {this.props.currentUser ? this.loggedIn(this.props.currentUser, this.props.logOut) : this.notLoggedIn(this.props.demo)}
    </div>
  );
}
}
export default NavBar;
