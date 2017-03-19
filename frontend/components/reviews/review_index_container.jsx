import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview, createReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {

  return({
  reviews: Object.keys(state.reviews).map(id => state.reviews[id]),
  listingId: ownProps.listingId
});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchReviews: () => dispatch(fetchReviews(ownProps.listingId)),
  deleteReview: id => dispatch(deleteReview(id)),
  createReview: data => dispatch(createReview(data)),
  updateReview: data => dispatch(updateReview(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
