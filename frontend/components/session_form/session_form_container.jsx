import { connect } from 'react-redux';
import { logIn, logOut, signUp, clearErrors, demo } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = { logIn, logOut, signUp, clearErrors, demo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
