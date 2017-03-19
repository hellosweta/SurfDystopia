import React from 'react';
import { Link, hashHistory } from 'react-router';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';
class ListingItem extends React.Component {
  constructor(props){
    super(props);
    this.listing = this.props.listing;
    this.region = this.props.region;
  }

  componentDoesMount(){
    this.props.fetchListing();
  }

  render() {
    return(
      <div className="listing-item">
        <div className="listing-image">
          <img src={this.listing.image_url}></img>
        </div>
        <div className="all-info">
          <div className="listing-info">
            <h1 className='listing-title'>{this.listing.title}</h1>
            <h2 className='listing-location'>{`${this.region.city},${this.region.state}`}</h2>
          </div>
          <div className="icons">
            <img className='propery-type-icon'src = "https://s3.amazonaws.com/surf-dev/Listings/ListingShow/home_icon.jpeg"></img>
            <h3 className='listing-type'>{this.listing.property_type}</h3>
            <img className='guest-icon' src="https://s3.amazonaws.com/surf-dev/Listings/ListingShow/robot_orange.jpg"></img>
            <h3 className='listing-guests'>{this.listing.max_guests} guests </h3>
          </div>

          <div>
            <h2>About this listing</h2>
          </div>

          <div className="booking">

            <h3 className='booking-box'>bookingPlaceholder</h3>

          </div>
          <div className="overview">
            <span className="space-label">
              <h2>The Space</h2>
            </span>
            <span>
              <h3 className='listing-type'>Property Type: {this.listing.description}</h3>
              <h3 className='house-rules'>House Rules: {this.listing.house_rules}</h3>
            </span>
          </div>

          <div className="host">
            <h3>HostInfoPlaceholder</h3>
          </div>

          <div className="review-form">
            <ReviewFormContainer listingId = {this.listing.id}/>
          </div>

          <div className="reviews">
            <ReviewIndexContainer listingId = {this.listing.id}/>
          </div>
        </div>
      </div>
    );
  }
}
export default ListingItem;
