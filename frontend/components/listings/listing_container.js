import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { fetchRegion } from '../../actions/region_actions';
import { fetchReviews, createReview } from '../../actions/review_actions';
import ListingItem from './listing_item';

const mapStateToProps = (state, ownProps) => {
  const listing = state.listings[ownProps.params.listingId];
  let region;
  let host;

  if (listing) {
    region = state.regions[listing.region_id];
    host = listing.host;
  }

  return({
    listing: listing,
    region: region,
    reviews: state.reviews,
    errors: state.reviews.errors,
    host: host,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
// pull listing out and grab region id
  return({
    fetchListing: () => dispatch(fetchListing(ownProps.params.listingId)),
    fetchRegion: () => dispatch(fetchRegion(ownProps.params.regionId)),
    fetchReviews: () => dispatch(fetchReviews(ownProps.params.listingId)),
    createReview: (review) => dispatch(createReview(ownProps.params.listingId, review))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingItem);
