import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/booking_actions';
import BookingIndex from './booking_index';

const mapStateToProps = (state, ownProps) => {
  return ({
    bookings: state.bookings.bookings,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBookings: () => dispatch(fetchBookings(ownProps.listingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
