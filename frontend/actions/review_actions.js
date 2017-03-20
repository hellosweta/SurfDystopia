import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const fetchReviews = listingId => dispatch => {
  return APIUtil.fetchReviews(listingId)
    .then(reviews => dispatch(receiveReviews(reviews)));
};

export const fetchReview = (listingId, id) => dispatch => (
  APIUtil.fetchReview(listingId, id)
    .then(reviews => dispatch(receiveReview(reviews)))
);

export const createReview = (listingId, review) => dispatch => (
  APIUtil.createReview(listingId, review)
    .then(review => dispatch(receiveReview(review)),
    error => dispatch(receiveErrors(error.responseJSON)))
);

// export const deleteReview = (listingId, review) => dispatch => (
//   APIUtil.createReview(listingId, review)
//     .then(review => dispatch(receiveReview(review)),
//     error => dispatch(receiveErrors(error.responseJSON)))
// );

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS
});
