import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview, createReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = ({ reviews, session }, ownProps) => {
  let currentUserId = "";

  if (session.currentUser) {
    currentUserId = session.currentUser.id;
  }

  return({
    reviews: reviews.reviews,
    listingId: ownProps.listingId,
    currentUserId: currentUserId
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchReviews: () => dispatch(fetchReviews(ownProps.listingId)),
  deleteReview: (review) => dispatch(deleteReview(review)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
