import { connect } from 'react-redux';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';
import BookingIndex from './booking_index';

const mapStateToProps = (state, ownProps) => {
  return ({
    bookings: state.bookings.bookings,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBookings: () => dispatch(fetchBookings(ownProps.listingId)),
  deleteBooking: (booking) => dispatch(deleteBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
