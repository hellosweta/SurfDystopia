import { connect } from 'react-redux';
import { logOut, demo } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser

});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  demo: () => dispatch(demo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

// <Modal> {SessionContainer} </Modal>
