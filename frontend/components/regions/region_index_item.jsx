import React from 'react';
import { Link, hashHistory } from 'react-router';


const RegionIndexItem = ({ region, router, fetchListings }) => (
  <li className="region col col-1-3">
    <Link to={`/search/${region.id}`} className="region-link">
      <img className="region-image" src={`${region.image_url}`}></img>
    </Link>
    <h2 className='region-name'>{region.city}</h2>
  </li>
);

export default RegionIndexItem;
