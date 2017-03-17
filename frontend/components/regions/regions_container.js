import { connect } from 'react-redux';
import { fetchRegion, fetchRegions } from '../../actions/region_actions';
import { fetchListings } from '../../actions/listing_actions';
import RegionsIndex from './region_index';

const mapStateToProps = ({regions}) => ({
  
  regions: Object.keys(regions).map(id => regions[id])
});

const mapDispatchToProps = dispatch => ({
  fetchRegions: () => dispatch(fetchRegions()),
  fetchRegion: id => dispatch(fetchRegion(id)),
  fetchListings: (id) => dispatch(fetchListings(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegionsIndex);
