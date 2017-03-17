import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingsMap from '../map/map';

class ListingIndex extends React.Component {

  componentWillMount(){
    this.props.fetchListings(this.props.regionId);
  }
  renderMap(){
    let firstListing = this.props.listings[0];
    return(<span className="map col col-1-3">
      <ListingsMap startLat={firstListing.latitude} startLong={firstListing.longitude}/>
    </span>);
  }
  render(){
    if (this.props.listings.length < 1) {
      return(<div></div>);
    } else {

    return(
    <div>
      <h2>Available Listings</h2>
      <div className="search-results">
        <span className="Listings col col-2-3">
          {this.props.listings.map(listing => (
            <ListingIndexItem listing={listing} key={listing.id}/>
          ))}
        </span>
        {this.renderMap()}
      </div>
    </div>);
    }
  }
}
export default ListingIndex;
