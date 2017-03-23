import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import ListingIndexContainer from './listings/listing_index_container';
import ListingContainer from './listings/listing_container';
import { clearErrors } from '../actions/session_actions';
const Root = ({ store }) => {

return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ HomeContainer } />
        <Route path="/search/:regionId" component={ListingIndexContainer} />
        <Route path="/listings/:listingId" component={ ListingContainer } />
      </Route>
    </Router>
  </Provider>
);
};
export default Root;
