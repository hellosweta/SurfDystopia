import { connect } from 'react-redux';
import { fetchListing, fetchListings } from '../../actions/listing_actions';
import { fetchRegion } from '../../actions/region_actions';
import ListingIndex from './listing_index';

const mapStateToProps = (state, ownProps) => {
  let regionId;
  let regionName;
  if (ownProps.params.regionId) {
    let region = state.regions[ownProps.params.regionId];
    regionId = ownProps.params.regionId;
    regionName = region.city;
  }
  return ({
    listings: Object.keys(state.listings).map(id => {
      if (id !== "errors") {
        return state.listings[id];
      }
    }),
    errors: state.listings.errors,
    regionId: regionId,
    regionName: regionName,
    latitude: state.regions && state.regions[regionId] ? state.regions[regionId].latitude : '',
    longitude: state.regions && state.regions[regionId] ? state.regions[regionId].longitude : '',
  });
};

const mapDispatchToProps = { fetchListings, fetchListing, fetchRegion };

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);
