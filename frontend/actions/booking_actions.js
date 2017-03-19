import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";

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
    .then(booking => dispatch(receiveBooking(booking)))
);

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});
