import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { fetchRegion } from '../../actions/region_actions';
import { fetchReviews, createReview } from '../../actions/review_actions';
import { fetchBookings } from '../../actions/booking_actions';
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
    bookings: state.bookings.bookings,
    reviews: state.reviews.reviews,
    host: host,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
// pull listing out and grab region id
  return({
    fetchListing: () => dispatch(fetchListing(ownProps.params.listingId)),
    fetchReviews: () => dispatch(fetchReviews(ownProps.params.listingId)),
    createReview: (review) => dispatch(createReview(review)),
    fetchBookings: () => dispatch(fetchBookings(ownProps.params.listingId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingItem);
