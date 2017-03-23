import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingsMap from '../map/map';
import AvailabiltySearchBarContainer from '../search/availability_search_container';

class ListingIndex extends React.Component {

  componentDidMount(){
    this.props.fetchRegion(this.props.routeParams.regionId).then(
    this.props.fetchListings(this.props.regionId)
    );
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.regionId !== newProps.params.regionId) {
      this.props.fetchRegion(newProps.params.regionId).then(
      this.props.fetchListings(newProps.params.regionId)
      );
    }
  }

  renderMap(){

    return(<span className="map">
      <ListingsMap listings={this.props.listings} startLat={this.props.latitude} startLong={this.props.longitude}/>
    </span>);
  }
  render(){
    console.log("listing index");
    console.log(this.props.regionId);
    if (this.props.listings.length < 1) {
      return(<div></div>);
    } else {
    return(
    <div>
      <h3 className="listing-show-title search-results-title">{`Available Listings in ${this.props.regionName}`}</h3>

      <AvailabiltySearchBarContainer regionId={this.props.regionId}/>
      <div className="search-results ">
        <span className="listings">
          {this.props.listings.map((listing, id) => (
            <ListingIndexItem className="listing-index-item"
                              listing={listing}
                              key={id} regionId={this.props.regionId}/>
          ))}
        </span>
        {this.props.latitude && this.props.longitude && this.renderMap()}
      </div>
    </div>);
    }
  }
}
export default ListingIndex;
