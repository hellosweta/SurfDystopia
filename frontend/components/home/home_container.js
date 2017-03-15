import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser

});

const mapDispatchToProps = dispatch => ({
  // logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
