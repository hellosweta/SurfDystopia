import React from 'react';
import ListingIndexItem from './listing_index_item';
import Map from '../map/map'
class ListingIndex extends React.Component {

  componentDidMount(){
    this.props.fetchListings(this.props.regionId);
  }

  render(){
    return(
    <div>
      <h2>Available Listings</h2>
      <div className="SearchResults">
        <span className="Listings col col-2-3">
          {this.props.listings.map(listing => (
            <ListingIndexItem listing={listing} key={listing.id}/>
          ))}
        </span>
        <span className="Map col col-1-3">

          <Map/>
        </span>
      </div>
    </div>);
  }
}
export default ListingIndex;
