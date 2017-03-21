import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { deleteBooking, receiveErrors, fetchBookings, createBooking } from '../../actions/booking_actions';

const mapStateToProps = ({bookings}, ownProps) => {
  const booking = {
    check_in_date: "",
    check_out_date: "",
    listing_id: ownProps.listingId,
  };

  return ({
    bookings: bookings.bookings,
    booking,
    errors: bookings.errors,
    listingId: ownProps.listingId
  });

};

const mapDispatchToProps = (dispatch) => ({
  fetchBookings: () => dispatch(fetchBookings()),
  createBooking: (booking) => dispatch(createBooking(booking)),
  clearErrors: () => dispatch(receiveErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);