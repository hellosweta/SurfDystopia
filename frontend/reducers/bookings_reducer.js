import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/booking_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  errors: []
});

const BookingsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const oldState = state;

  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return merge( {}, oldState, action.bookings);
    case RECEIVE_BOOKING:
      const newBooking = {[action.booking.id]: action.booking};
      return merge({}, oldState, newBooking);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, {
        errors
      });

    case CLEAR_ERRORS:
      return Object.assign({}, oldState, { errors: [] });
    default:
      return state;
  }
};

export default BookingsReducer;
