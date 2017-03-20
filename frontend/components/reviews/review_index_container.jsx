import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview, createReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return({

  reviews: Object.keys(state.reviews).map(id => {
    if (id !== "errors") {
      return state.reviews[id];
    }
  }),
  errors: state.reviews.errors,
  listingId: ownProps.listingId
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
