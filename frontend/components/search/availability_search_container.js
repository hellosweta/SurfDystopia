import { connect } from 'react-redux';
import { fetchAvailableListings } from '../../actions/listing_actions';
import AvailabiltySearchBar from './availability_search';

const mapStateToProps = (state, ownProps) => {
  return({
    regionId: ownProps.regionId
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchAvailableListings: (listing) => {
      debugger
      return(dispatch(fetchAvailableListings(listing)));
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailabiltySearchBar);
