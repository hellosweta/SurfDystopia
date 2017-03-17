import React from 'react';
import { Link } from 'react-router';
import RegionsContainer from '../regions/regions_container';
// const handleClick = (e) => {
//   e.preventDefault();
//   fetchListings(1);
// };

const Home = ({ currentUser, fetchListings }) => (
  <div className="home-group">
    <section className="hero">
      <img className="hero-image" src="https://s3.amazonaws.com/surf-dev/Home/Splash.png" alt="Welcome"></img>
      <section className="hero-text">
        <h1 className="text">If Not Now...When?</h1>
        <Link to='/search' className="text">Stay with locals and meet travelers </Link>
      </section>
    </section>
    <section className="explore">
      <RegionsContainer/>
    </section>
	</div>
);

// Eventually there will be componenents here that on click they will call fetchListings with their region id


// map over region ids and pass them through ownprops and redirect to /search
// sampleRegions.map({
// 	<Link to='/search?regionId=${region.id}'>
// 		<div region stuff> pretty picture</div>x
// 	</Link>
// })
export default Home;
