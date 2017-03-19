import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      const newReview = {[action.review.id]: action.review};
      return merge({}, state, newReview);
    default:
      return state;
  }
};

export default ReviewsReducer;
