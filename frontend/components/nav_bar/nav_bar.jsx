import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import SearchBarContainer from '../search/search_bar_container';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

  }

  componentWillMount(){
    this.props.fetchRegions();
  }


  componentDidMount(){
    this.props.fetchRegions();
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
    );
  }

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

  initAutocomplete() {
    // var map = new google.maps.Map(document.getElementById('map'), {
    //   center: {lat: -33.8688, lng: 151.2195},
    //   zoom: 13,
    //   mapTypeId: 'roadmap'
    // });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('autocomplete');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  }
  render() {
    return(
      <div className="login-signup">

        <Link to='/' className="logo">
          <img src="https://s3.amazonaws.com/surf-dev/NavBar/LogoRobot.png" alt="SurfDystopia"></img>
        </Link>
        <h3>Find Hosts In:</h3>
        <SearchBarContainer regions={this.props.regions}/>
        {this.props.currentUser ? this.loggedIn(this.props.currentUser, this.props.logOut) : this.notLoggedIn(this.props.demo)}
      </div>
    );
  }
}

export default NavBar;
