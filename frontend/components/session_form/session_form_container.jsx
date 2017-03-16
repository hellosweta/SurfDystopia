import { connect } from 'react-redux';
import { logIn, logOut, signUp, clearErrors, demo } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = { logIn, logOut, signUp, clearErrors, demo };

// const mapDispatchToProps = (dispatch, { location }) => {
//   // const formType = location.pathname.slice(1);
//   // let processForm = "";
//   // if (formType === 'login') {
//   //   processForm = logIn;
//   // } else {
//   //   processForm = signUp;
//   // }
//   return {
//     // processForm: user => dispatch(processForm(user)),
//     logIn: (user) => dispatch(logIn(user)),
//     logOut: () => dispatch(logOut()),
//     signUp: (user) => dispatch(signUp(user)),
//
//     clearErrors: () => dispatch(clearErrors()),
//     // formType
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
