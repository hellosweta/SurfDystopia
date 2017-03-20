import React from 'react';
import { Link, hashHistory } from 'react-router';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';
import BookingContainer from '../bookings/bookings_container';
import Stars from 'react-stars';

class ListingItem extends React.Component {
  constructor(props){
    super(props);
    this.listing = this.props.listing;
    this.region = this.props.region;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;
    this.updateStars = this.updateStars.bind(this);
    this.clearReviewForm = this.clearReviewForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount(){
    this.props.fetchListing();

    this.props.fetchReviews();
  }
  componentWillReceiveProps(newProps) {
    this.setState(newProps.review);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateStars(newRating) {
    this.setState({
      rating: newRating
    });
  }

  clearReviewForm() {
     this.setState({
       title: "",
       body:"",
       rating:0
     });
 }

  renderErrors() {
    if (this.props.errors === undefined){
      return(<div></div>)
    } else {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
    this.clearReviewForm();
  }

  render() {

    if (this.listing === undefined) {
      return(<div></div>);
    } else {


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
              <BookingContainer className="booking-box" booking={this.props.booking} listingId={this.listing.id} />


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
              {this.renderErrors()}
              <div className="review-form">
                <h3>Write a Review</h3>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <h2 className="rating">How Was Your Host?</h2>
                      <Stars
                        className="stars"
                        count={5}
                        char={"⚙"}
                        size={32}
                        value={this.state.rating}
                        onChange={this.updateStars}
                        color1={'#585c6c'}
                        color2={'#b48395'} />
                    </div>
                    <span className="title">
                    <input
                      className="standard-input"
                      type="text"
                      value={this.state.title}
                      placeholder="Title"
                      onChange={this.update('title')} />
                    </span>
                    <span className="body ">
                    <textarea
                      className="standard-input"
                      value={this.state.body}

                      onChange={this.update('body')}
                      placeholder="Tell us about your host..." />
                    </span>

                  <span >
                    <button className ="form-button" onClick={this.handleSubmit} type="submit">Submit</button>
                    <button className='header-button' onClick={this.clearReviewForm}>Cancel</button>

                  </span>
                </form>
              </div>
            </div>

            <div className="reviews">
              <ReviewIndexContainer listingId = {this.listing.id}/>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default ListingItem;
