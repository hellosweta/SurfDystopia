import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingsMap from '../map/map';

class ListingIndex extends React.Component {

  componentDidMount(){
    this.props.fetchListings(this.props.regionId);
  }
  renderMap(){

    return(<span className="map ">
      <ListingsMap listings={this.props.listings} startLat={this.props.latitude} startLong={this.props.longitude}/>
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
        <span className="listings">
          {this.props.listings.map((listing, id) => (
            <ListingIndexItem listing={listing} key={id}/>
          ))}
        </span>
        {this.renderMap()}
      </div>
    </div>);
    }
  }
}
export default ListingIndex;
