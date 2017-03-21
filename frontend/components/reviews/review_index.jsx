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

  editLink(id){
    return (e) => {
      e.preventDefault();
      const url = `/reviews/${id}/edit`;
      hashHistory.push(url);
    };
  }

  handleDelete(){

  }

  displayDelete(review){
    if (this.props.currentUserId) {
      return(<button onClick={() => this.props.deleteReview(review)}>Delete</button>);
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

      return (
        <div >
          <div className="review-index-label">
            <h2 className="review-count-label">{reviewCount} {this.props.reviewText} </h2>
          </div>
          <ul className='review-list'>
            {
              this.props.reviews.map((review, id) => {
                return(
              <li className='review-item' key={id}>
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
