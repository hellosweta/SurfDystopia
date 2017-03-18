import { connect } from 'react-redux';

import { fetchListing, fetchListings } from '../../actions/listing_actions';


import ListingIndex from './listing_index';

const mapStateToProps = (state, ownProps) => {
    const regionId = ownProps.params.regionId;
    // const regions = Object.keys(state.regions).map(id => state.regions[id]),
    return ({
    listings:  Object.keys(state.listings).map(id => state.listings[id]),
    regionId: regionId,
    latitude: state.regions[regionId].latitude,
    longitude: state.regions[regionId].longitude,
  });
};
const mapDispatchToProps = dispatch => ({
  fetchListings: (id) => dispatch(fetchListings(id)),
  fetchListing: id => dispatch(fetchListing(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingIndex);
