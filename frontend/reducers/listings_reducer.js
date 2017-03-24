import { RECEIVE_LISTINGS, RECEIVE_LISTING, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/listing_actions';
import merge from 'lodash/merge';

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let oldState = merge({}, state);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      debugger;
      return merge({}, action.listings);
    case RECEIVE_LISTING:
      const newListing = {[action.listing.id]: action.listing};
      return merge({}, state, newListing);
    default:
      return state;
  }
};

export default ListingsReducer;
