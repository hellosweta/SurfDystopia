import React from 'react';
// import ReviewIndexItem from './review_index_item';
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
    return (
      <div>
        <ul>
          {
            this.props.reviews.map(review => (
              <li>
                  {review.title}
                  {review.body}
                  {review.rating}
                <button onClick={editLink(review.id)}>Edit</button>&nbsp;
                  <button onClick={() => deleteReview(review.id)}>Delete</button>
              </li>
            ))
          }
        </ul>
        <ReviewFormContainer formType="new" />
      </div>
    );
  }
}

export default ReviewIndex;
