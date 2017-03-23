import React from 'react';
import { Link, hashHistory } from 'react-router';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';
import BookingContainer from '../bookings/bookings_container';
import BookingIndexContainer from '../bookings/booking_index_container';
import SearchBarContainer from '../search/search_bar_container';

import Stars from 'react-stars';
import DateRangePickerWrapper from '../date_picker/DateRangePickerWrapper';
class ListingItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisible: false
    };
  }

  componentDidMount(){
    this.props.fetchListing();
    this.props.fetchReviews();
    this.props.fetchBookings();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.bookings.length !== this.props.bookings.length) {
      this.props.fetchBookings();
    }
  }

  toggleReviewForm(){
    let newformVisible = this.state.formVisible;
    newformVisible === true ? newformVisible = false : newformVisible = true;
    this.setState({
      formVisible: newformVisible
    });
  }

  displayReviewForm(){
    return(<ReviewFormContainer listingId={this.props.listing.id} formType={"new"}/>);
  }

  render() {

    if (this.props.listing === undefined) {
      return(<div></div>);
    } else {
      let reviewText;
      let reviewCount = this.props.reviews.length;

      if (reviewCount > 1) {
        reviewText = "Reviews";
      } else if (reviewCount === 0) {
        reviewText = "Not yet reviewed";
        reviewCount = '';
      } else {
        reviewText = "Review";
      }

      return(
        <div className="listing-item group">
          <div className="listing-image-div">
            <img className="listing-image" src={this.props.listing.image_url}></img>
          </div>
          <div className="all-info">
            <div className="listing-info-not-form">
              <div className="listing-info">
                <div className="text-listing-overview">
                  <h1 className='listing-show-title'>{this.props.listing.title}</h1>
                  <Link className='listing-location' to={`/search/${this.props.listing.region_id}`}>{`${this.props.region.city},${this.props.region.state}`}</Link>
                  <div className="index-rating">
                    {"⚙ ".repeat(this.props.listing.average_rating)}
                    <span className="index-review-count"> {reviewCount} {reviewText} </span>
                  </div>
                </div>
                <div className="user-thumbnail">
                  <img src={this.props.host.image_url}></img>
                  <p> {this.props.host.name} </p>
                </div>
              </div>
              <div>
                <article className="listing-icons group">
                  <ul className="listing-icons-ul">
                    <li>
                      <img className='propery-type-icon'src = "https://s3.amazonaws.com/surf-dev/Listings/ListingShow/home_icon.jpeg"></img>
                    </li>
                    <li>
                      <h3 className='listing-type'>{this.props.listing.property_type}</h3>
                    </li>
                  </ul>
                  <ul className="listing-icons-ul">
                    <li>
                  <img className='guest-icon' src="https://s3.amazonaws.com/surf-dev/Listings/ListingShow/robot_orange.jpg"></img>
                    </li>
                    <li>
                      <h3 className='listing-guests'>{this.props.listing.max_guests} guests </h3>
                    </li>
                  </ul>
                </article>


              </div>

              <article className="listing-description">
                <h2>About this listing</h2>
                <p className='listing-type'> { this.props.listing.description } </p>
              </article>


              <div className="listing-more-info">
                <span className="space-label">
                  <h2>The Space</h2>
                </span>
                <span className="space-info">
                  <ul className='listing-type'>
                    <li>
                      Property Type
                    </li>
                    <li>
                      {this.props.listing.property_type}
                    </li>
                  </ul>
                  <h3 className='house-rules'> House Rules: {this.props.listing.house_rules}</h3>
                </span>
              </div>

              <div className="booking-index">
                <BookingIndexContainer currentUser={this.props.currentUser} listingId = {this.props.listing.id}/>
              </div>

              <div className="toggle-review-button">
                <i onClick={() => this.toggleReviewForm()} className="fa fa-plus-circle" aria-hidden="true"></i>
                {this.state.formVisible ? <div>{this.displayReviewForm()}</div> : (<div><h3 className="review-your-host">Review Your Host</h3></div>)}
              </div>

              <div className="reviews">
                  <ReviewIndexContainer listingId = {this.props.listing.id}/>
              </div>
            </div>


          <div className="booking">
            <div className="booking-form-header group">
              <h3 className="booking-form-header-text">Surf</h3>
            </div>
            <BookingContainer className="booking-box" bookings={this.props.bookings} listingId={this.props.listing.id} />
          </div>



        </div>

        </div>
      );
    }
  }
}
export default ListingItem;
