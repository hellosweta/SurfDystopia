import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';
import merge from 'lodash/merge';

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      const newListing = {[action.listing.id]: action.listing};
      return merge({}, state, newListing);
    default:
      return state;
  }
};

export default ListingsReducer;
