import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { deleteBooking, receiveErrors, fetchBookings, createBooking } from '../../actions/booking_actions';

const mapStateToProps = ({bookings}) => ({
  bookings: Object.keys(bookings).map(id => {
    if (id !== "errors") {
      return bookings[id];
    }
  }),
  errors: bookings.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookings: () => dispatch(fetchBookings()),
  createBooking: (booking) => dispatch(createBooking(booking)),
  clearErrors: () => dispatch(receiveErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
