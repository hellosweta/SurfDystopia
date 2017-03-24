import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchReview, createReview, updateReview, clearErrors } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    listingId: ownProps.listingId,
    reviewErrors: state.reviews.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const submit = ownProps.formType === "new" ? createReview : updateReview;
  return {
    fetchReview: id => dispatch(fetchReview(id)),
    submit: review => dispatch(createReview(review)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
