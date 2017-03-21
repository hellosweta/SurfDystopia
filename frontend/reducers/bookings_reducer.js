import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, RECEIVE_BOOKING_ERRORS, CLEAR_ERRORS } from '../actions/booking_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  bookings: [],
  errors: [],
});

const BookingsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const oldState = state;

  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return merge( {}, oldState, {
        bookings: Object.keys(action.bookings).map(id => action.bookings[id]),
      });
    case RECEIVE_BOOKING:
      const updatedBookings = [...state.bookings, action.newBooking];
      return merge({}, oldState, { bookings: updatedBookings });
    case RECEIVE_BOOKING_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {
        errors
      });

    case CLEAR_ERRORS:
      return Object.assign({}, oldState, { errors: [] });
    default:
      return state;
  }
};

export default BookingsReducer;
