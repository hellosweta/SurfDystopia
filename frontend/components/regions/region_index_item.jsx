import React from 'react';
import { Link, hashHistory } from 'react-router';


const RegionIndexItem = ({ region, router, fetchListings }) => (
  <li>
    <Link to={`/search/${region.id}`} className="region-link">{region.city}</Link>
  </li>
);

export default RegionIndexItem;
