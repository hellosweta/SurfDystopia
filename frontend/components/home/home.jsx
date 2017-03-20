import React from 'react';
import { Link } from 'react-router';
import RegionsContainer from '../regions/regions_container';


const Home = ({ currentUser, fetchListings }) => (
  <div className="home-group">
    <section className="hero">
      <img className="hero-image" src="https://s3.amazonaws.com/surf-dev/Home/Splash.png" alt="Welcome"></img>
      <section className="hero-text">
        <h1 className="text">If Not Now...When?</h1>
        <Link to='/search/1' className="text">Stay with locals and meet travelers </Link>
      </section>
    </section>
    <section className="explore">
      <RegionsContainer/>
    </section>
	</div>
);

export default Home;
