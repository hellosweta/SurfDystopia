import React from 'react';
// import ReviewIndexItem from './review_index_item';
import { hashHistory } from 'react-router';


class ReviewIndex extends React.Component {
  constructor(props){
    super(props);
    this.displayDelete = this.displayDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  displayDelete(review){
    if (this.props.currentUserId == review.author_id) {
      return(<button className="delete" onClick={() => this.props.deleteReview(review)}>Delete</button>);
    }
  }

  render () {
    if (this.props.reviews.length < 1) {
      return (<div><h2>Host Hasn't Been Reviewed Yet</h2></div>);
    } else if (this.props.reviews === undefined) {
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
      Object.freeze(this.props.reviews);
      const newReviews = this.props.reviews;
      const reverseReviews = [];
      newReviews.forEach( review => reverseReviews.unshift(review));
      debugger;
      return (
        <div >
          <div className="review-index-label">
            <h2 className="review-count-label">{reviewCount} {reviewText} </h2>
          </div>
          <ul className='review-list'>
            {
              reverseReviews.map((review, id) => {
                return(
              <li className='review-item' key={id}>
                <div className="reviewer">
                  <div><img className="reviewer-pic" src={review.author.image_url}></img></div>
                  <div className="reviewer-name">
                    {review.author.name}
                  </div>
              </div>

                <div className="review-title" >
                    {review.title}
                </div>
                <div className="review-body">
                    {review.body}
                </div>
                <div className="review-rating">
                  {" ⚙ ".repeat(review.rating)}
                </div>

                <div>
                  {this.displayDelete(review)}
                </div>
              </li>);})
            }
          </ul>

        </div>
      );
    }
  }
}

export default ReviewIndex;
