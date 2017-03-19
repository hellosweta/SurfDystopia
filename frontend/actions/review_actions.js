import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const fetchReviews = listingId => dispatch => {
  return APIUtil.fetchReviews(listingId)
    .then(reviews => dispatch(receiveReviews(reviews)));
};

export const fetchReview = id => dispatch => (
  APIUtil.fetchReview(id)
    .then(reviews => dispatch(receiveReview(reviews)))
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
);

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});
