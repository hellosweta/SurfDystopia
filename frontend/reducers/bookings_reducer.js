import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/booking_actions';
import merge from 'lodash/merge';

const BookingsReducer = (state = { errors: [] }, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return merge({}, action.bookings);
    case RECEIVE_BOOKING:
      const newBooking = {[action.booking.id]: action.booking};
      return merge({}, state, newBooking);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, {
        errors
      });
    case CLEAR_ERRORS:
      const oldState = state;
      return Object.assign({}, oldState, { errors: [] });
    default:
      return state;
  }
};

export default BookingsReducer;
