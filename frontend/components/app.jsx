require('newrelic');
import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';
import SearchBarContainer from './search/search_bar_container';
import { fetchRegions } from '../actions/region_actions';


const App = ({ children }) => (
  <div>
    <NavBarContainer />
    {children}
  </div>
);

export default App;
