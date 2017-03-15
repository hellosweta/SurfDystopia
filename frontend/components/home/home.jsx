import React from 'react';
import { Link } from 'react-router';

const Home = ({ currentUser }) => (
  <div className="home-group">
    <img className="splash" src="https://s3.amazonaws.com/surf-dev/Home/Splash.png" alt="Welcome" style={{float: 'left'}}></img>
    <button className="region-button">Region container on click</button>
	</div>
);

export default Home;
