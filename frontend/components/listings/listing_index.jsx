import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {

  componentDidMount(){
    this.props.fetchListings(this.props.regionId);
  }

  // componentDidRe

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
          <h2>Map Placehoder</h2>
        </span>
      </div>
    </div>);
  }
}
export default ListingIndex;
