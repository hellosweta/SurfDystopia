import { RECEIVE_REVIEWS, RECEIVE_REVIEW, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/review_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  errors: []
});

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let oldState = merge({}, state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, action.reviews);
    case RECEIVE_REVIEW:
      const newReview = {[action.review.id]: action.review};
      return merge({}, oldState, newReview);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {
        errors
      });
    // case CLEAR_ERRORS:
    //   return Object.assign({}, oldState, { errors: [] });
    default:
      return state;
  }
};

export default ReviewsReducer;
