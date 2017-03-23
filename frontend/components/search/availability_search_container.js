import { connect } from 'react-redux';
import { fetchAvailableListings } from '../../actions/listing_actions';
import AvailabiltySearchBar from './availability_search';

const mapStateToProps = (state, ownProps) => {
  
  return({
    regionId: ownProps.regionId
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchAvailableListings: (listing) => dispatch(fetchAvailableListings(listing))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailabiltySearchBar);
