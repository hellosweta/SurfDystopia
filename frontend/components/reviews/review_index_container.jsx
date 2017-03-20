import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview, createReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = ({ reviews }, ownProps) => {
  return({
    reviews: reviews.reviews,
    errors: reviews.errors,
    listingId: ownProps.listingId,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchReviews: () => dispatch(fetchReviews(ownProps.listingId)),
  deleteReview: id => dispatch(deleteReview(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
