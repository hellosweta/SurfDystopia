import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING, RECEIVE_BOOKING_ERRORS, CLEAR_ERRORS } from '../actions/booking_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  bookings: [],
  errors: [],
});

const BookingsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let oldState = merge({}, state);

  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return merge( {}, oldState, {
        bookings: Object.keys(action.bookings).map(id => action.bookings[id]),
      });
    case RECEIVE_BOOKING:
      // const updatedBookings = [...state.bookings, action.newBooking];
      // return merge({}, oldState, { bookings: updatedBookings });
      const newBooking = action.booking;
      oldState.bookings.push(newBooking);
      return oldState;
    case REMOVE_BOOKING:
      let removeIdx;
      oldState.bookings.forEach((booking, idx)  => {
        if (booking.id === action.booking.id) {
          removeIdx = idx;
        }
      });
      let newArray = oldState.bookings.slice(0, removeIdx).concat(oldState.bookings.slice(removeIdx + 1));
      oldState.bookings = newArray;
      return oldState;

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
