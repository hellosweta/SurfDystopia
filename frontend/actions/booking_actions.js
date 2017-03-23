import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const REMOVE_BOOKING = "REMOVE_BOOKING";

export const fetchBookings = listingId => dispatch => {
  return APIUtil.fetchBookings(listingId)
    .then(bookings => dispatch(receiveBookings(bookings)));
};

export const fetchBooking = id => dispatch => (
  APIUtil.fetchBooking(id)
    .then(booking => dispatch(receiveBooking(booking)))
);

export const createBooking = booking => dispatch => (
  APIUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)),
    error => dispatch(receiveBookingErrors(error.responseJSON)))
);

export const deleteBooking = (booking) => dispatch => (
  APIUtil.deleteBooking(booking)
    .then(booking => dispatch(removeBooking(booking)),
    error => dispatch(receiveBookingErrors(error.responseJSON)))
);

export const removeBooking = booking => ({
  type: REMOVE_BOOKING,
  booking
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS
});
