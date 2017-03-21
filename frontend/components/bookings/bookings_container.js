import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { deleteBooking, receiveErrors, fetchBookings, createBooking, clearErrors } from '../../actions/booking_actions';

const mapStateToProps = ({bookings}, ownProps) => {

  return ({
    bookings: bookings.bookings,
    bookingErrors: bookings.errors,
    listingId: ownProps.listingId
  });

};

const mapDispatchToProps = (dispatch) => ({
  fetchBookings: () => dispatch(fetchBookings()),
  createBooking: (booking) => dispatch(createBooking(booking)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
