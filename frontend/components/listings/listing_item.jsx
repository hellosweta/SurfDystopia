import React from 'react';
import { Link, hashHistory } from 'react-router';

class ListingItem extends React.Component {
  constructor(props){
    super(props);
    this.listing = this.props.listing;
    this.region = this.props.region;
  }

  componentWillMount(){
    this.props.fetchListing();
  }

  render() {
    return(
      <div className="main-listing-item">
        <div className="listing-image">
          <img src={this.listing.image_url}></img>
        </div>
        <div className="listing-info">
          <h1 className='listing-title'>{this.listing.title}</h1>
          <h2 className='listing-location'>{`${this.region.city},${this.region.state}`}</h2>
        </div>
        <div className="icons col col-2-3">
          <img className='propery-type-icon'src = "https://s3.amazonaws.com/surf-dev/Listings/ListingShow/steamer_high_cont.gif"></img>
          <h3 className='listing-type'>{this.listing.property_type}</h3>
          <img className='guest-icon' src="https://s3.amazonaws.com/surf-dev/Listings/ListingShow/robot_orange.jpg"></img>
          <h3 className='listing-guests'>{this.listing.max_guests} guests (includes electricty powered)</h3>
        </div>
        <div className="booking">

          <h3 className='booking-box'>bookingPlaceholder</h3>

        </div>
        <div className="overview">

          <h3 className='listing-type'>{this.listing.description}</h3>
          <h3 className='house-rules'>{this.listing.house_rules}</h3>
        </div>

        <div className="host">
          <h3>HostInfoPlaceholder</h3>
        </div>

        <div className="reviews">
          <h3>ReviewsPlaceholder</h3>
        </div>
      </div>
    );
  }
}
export default ListingItem;
