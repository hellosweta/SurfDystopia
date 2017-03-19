import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';


import ListingItem from './listing_item';

const mapStateToProps = (state, ownProps) => {
  const listing = state.listings[ownProps.params.listingId];
  return({
    listing: listing,
    region: state.regions[listing.region_id]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchListing: () => dispatch(fetchListing(ownProps.params.listingId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingItem);
