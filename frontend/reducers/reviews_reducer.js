import { RECEIVE_REVIEWS, RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS, CLEAR_ERRORS, REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  reviews: [],
  errors: [],
});

const ReviewsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let oldState = merge({}, state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      const reviewsArray = Object.keys(action.reviews).map(id => action.reviews[id]);
      oldState.reviews = reviewsArray;
      return oldState;

    case RECEIVE_REVIEW:
      const newReview = action.review;
      oldState.reviews.push(newReview);
      return oldState;

    case REMOVE_REVIEW:
      let removeIdx;
      oldState.reviews.forEach((review, idx)  => {
        if (review.id === action.review.id) {
          removeIdx = idx;
        }
      });
      oldState.reviews.splice(removeIdx, removeIdx);
      return oldState;

    case RECEIVE_REVIEW_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, { errors });

    case CLEAR_ERRORS:
      return Object.assign({}, oldState, { errors: [] });
    default:
      return state;
  }
};

export default ReviewsReducer;
