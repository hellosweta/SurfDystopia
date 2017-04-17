import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { deleteBooking, receiveErrors, fetchBookings, createBooking, clearErrors } from '../../actions/booking_actions';

const mapStateToProps = ({bookings, session}, ownProps) => {

  return ({
    bookings: bookings.bookings,
    bookingErrors: bookings.errors,
    listingId: ownProps.listingId,
    sessionErrors: session.errors
  });

};

const mapDispatchToProps = (dispatch) => ({
  fetchBookings: (listingId) => dispatch(fetchBookings(listingId)),
  createBooking: (booking) => dispatch(createBooking(booking)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
