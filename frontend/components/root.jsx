import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import { clearErrors } from '../actions/session_actions';
const Root = ({ store }) => {

// const _ensureLoggedIn = (nextState, replace) => {
//     const currentUser = store.getState().session.currentUser;
//     if (!currentUser) {
//       hashHistory.push('/');
//     }
//   };
//
// const _redirectIfLoggedIn = (nextState, replace) => {
//   const currentUser = store.getState().session.currentUser;
//   if (currentUser) {
//     hashHistory.push('/');
//   } else {
//     store.dispatch(clearErrors());
//   }
// };


return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={HomeContainer} />
        // <Route path="/search" />

      </Route>
    </Router>
  </Provider>
);
};
export default Root;
