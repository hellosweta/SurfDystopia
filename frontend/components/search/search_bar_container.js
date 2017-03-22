import { connect } from 'react-redux';
import { fetchRegions } from '../../actions/region_actions';
import { fetchBookings } from '../../actions/booking_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state, ownProps) => {
  return({
    regions: ownProps.regions,
    bookings: state.bookings.bookings,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchRegions: () => dispatch(fetchRegions())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
