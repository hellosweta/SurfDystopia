import React from 'react';
// import ReviewIndexItem from './review_index_item';
import { hashHistory } from 'react-router';
import ReviewFormContainer from './review_form_container';

class ReviewIndex extends React.Component {
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

  render () {
    if (this.props.reviews.length < 1) {
      return (<div><h2>Host Hasn't Been Reviewed Yet</h2></div>);
    } else {
      return (
        <div >
          <ul className='review-list'>
            {
              this.props.reviews.map((review, id) => (
              <li>
                <div className="review-title" key={id}>
                    {review.title}

                </div>
                <div className="review-body">
                    {review.body}
                </div>
                <div className="review-rating">
                  {"⚙".repeat(review.rating)}
                </div>

                <div>
                    <button onClick={this.editLink(review.id)}>Edit</button>&nbsp;
                    <button onClick={() => this.props.deleteReview(review.id)}>Delete</button>
                </div>
              </li>))
            }
          </ul>
          <ReviewFormContainer formType="new" />
        </div>
      );
    }
  }
}

export default ReviewIndex;
