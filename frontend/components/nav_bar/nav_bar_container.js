import { connect } from 'react-redux';
import { logOut, demo } from '../../actions/session_actions';
import { fetchRegions } from '../../actions/region_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session, regions }) => ({
  currentUser: session.currentUser,
  regions: Object.keys(regions).map(id => regions[id] )
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  fetchRegions: () => dispatch(fetchRegions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
