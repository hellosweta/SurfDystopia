import React from 'react';
import { Link, hashHistory } from 'react-router';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';
import BookingContainer from '../bookings/bookings_container';
import Stars from 'react-stars';

class ListingItem extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStars = this.updateStars.bind(this);
    this.clearReviewForm = this.clearReviewForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.state = {
      review: {
        title: "",
        body: "",
        rating: 0,
        formformVisible: false,
      },
      booking: {
        check_in_date: "",
        check_out_date: "",
      }
    };
  }

  componentDidMount(){
    // this.props.fetchRegion();
    this.props.fetchListing();
    this.props.fetchReviews();
  }
  toggleReviewForm(){
    let newformVisible = this.state.review.formVisible;
    newformVisible === true ? newformVisible = false : newformVisible = true;
    this.setState({review:
      {formVisible: newformVisible}
    });
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
      return(<div></div>);
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

  displayReviewForm(){
    return(<div className="review-form">
      {this.renderErrors()}
      <div>
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
            <div className="title">
            <input
              className="standard-input"
              type="text"
              value={this.state.title}
              placeholder="Title"
              onChange={this.update('title')} />
          </div>
            <div className="body ">
            <textarea
              className="standard-input"
              value={this.state.body}

              onChange={this.update('body')}
              placeholder="Tell us about your host..." />
          </div>

          <span >
            <button className ="form-button" onClick={this.handleSubmit} type="submit">Submit</button>
            <button className='header-button' onClick={this.clearReviewForm}>Cancel</button>

          </span>
        </form>
      </div>
    </div>
  );
  }
  render() {

    if (this.props.listing === undefined) {
      return(<div></div>);
    } else {
      let reviewText;

      let reviewCount = this.props.listing.review_count;

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
                  <h2 className='listing-location'>{`${this.props.region.city},${this.props.region.state}`}</h2>
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
              <div onClick={() => this.toggleReviewForm()}>Add a Review</div>
              {this.state.review.formVisible ? this.displayReviewForm() : (<div></div>)}
              <div className="reviews">
                <div className="review-index-label">
                  <h2 className="review-count-label">{reviewCount} {reviewText} </h2>
                </div>
                  <ReviewIndexContainer listingId = {this.props.listing.id}/>
              </div>
            </div>


          <div className="booking">
            <div className="booking-form-header group">
              <h3 className="booking-form-header-text">Surf</h3>
            </div>
            <BookingContainer className="booking-box" booking={this.props.booking} listingId={this.props.listing.id} />
          </div>
        </div>
        </div>
      );
    }
  }
}
export default ListingItem;
