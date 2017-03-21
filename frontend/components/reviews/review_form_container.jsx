import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchReview, createReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let review = { title: "", body: "", rating: ""};
  if (ownProps.params) {
    review = state.reviews[ownProps.params.reviewId];
  }
  let formType = ownProps.formType || "edit";
  return { review, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const submit = ownProps.formType === "new" ? createReview : updateReview;
  return {
    fetchReview: id => dispatch(fetchReview(id)),
    submit: review => dispatch(submit(review))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);