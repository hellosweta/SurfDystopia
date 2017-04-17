import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const fetchReviews = listingId => dispatch => {
  return APIUtil.fetchReviews(listingId)
    .then(reviews => dispatch(receiveReviews(reviews)));
};

export const fetchReview = (listingId, id) => dispatch => (
  APIUtil.fetchReview(listingId, id)
    .then(reviews => dispatch(receiveReview(reviews)))
);

export const createReview = (review) => dispatch => {
  APIUtil.createReview(review).then(review => dispatch(receiveReview(review)), error => dispatch(receiveReviewErrors(error.responseJSON)))
};

export const deleteReview = (review) => dispatch => (
  APIUtil.deleteReview(review)
    .then(review => dispatch(removeReview(review)),
    error => dispatch(receiveReviewErrors(error.responseJSON)))
);

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS
});
