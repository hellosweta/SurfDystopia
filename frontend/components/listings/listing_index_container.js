import { connect } from 'react-redux';

import { fetchListing, fetchListings } from '../../actions/listing_actions';
// import { selectListing } from '../../reducers/selectors';

import ListingIndex from './listing_index';

const mapStateToProps = ({listings}, ownProps) => {
  // const listingId = parseInt(params.listingId);
  // const listing = selectListing(state, listingId);
  return {
    // listingId,
    // listing
    listings:  Object.keys(listings).map(id => listings[id]),
    regionId: ownProps.params.regionId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchListings: (id) => dispatch(fetchListings(id)),
  fetchListing: id => dispatch(fetchListing(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingIndex);
