import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { fetchReviews, createReview } from '../../actions/review_actions';
import ListingItem from './listing_item';

const mapStateToProps = (state, ownProps) => {
  const listing = state.listings[ownProps.params.listingId];
  const review = {
    title: "",
    body: "",
    rating: 0,
  };

  const booking = {
    check_in_date: "",
    check_out_date: "",
  };
  return({
    listing: listing,
    region: state.regions[ownProps.params.regionId],
    review: review,
    errors: state.reviews.errors,
    booking: booking,

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return({

  fetchListing: () => dispatch(fetchListing(ownProps.params.listingId)),
  fetchReviews: () => dispatch(fetchReviews(ownProps.params.listingId)),
  createReview: (review) => dispatch(createReview(ownProps.params.listingId, review))
});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingItem);
