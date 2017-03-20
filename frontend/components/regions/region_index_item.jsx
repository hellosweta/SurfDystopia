import React from 'react';
import { Link, hashHistory } from 'react-router';


const RegionIndexItem = ({ region, router, fetchListings }) => (
  <li className="region-image-container" onClick={() => hashHistory.push(`/search/${region.id}`)} className="region region-link col col-1-3">
    <img className="region-image" src={`${region.image_url}`}></img>
    <h2 className='region-name'>{region.city}</h2>
  </li>
);

export default RegionIndexItem;
