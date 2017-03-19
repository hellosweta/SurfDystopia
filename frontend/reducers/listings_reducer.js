import { RECEIVE_LISTINGS, RECEIVE_LISTING, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/listing_actions';
import merge from 'lodash/merge';

const ListingsReducer = (state = { errors: [] }, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return merge({}, action.listings);
    case RECEIVE_LISTING:
      const newListing = {[action.listing.id]: action.listing};
      return merge({}, state, newListing);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, {
        errors
      });
    case CLEAR_ERRORS:
      const oldState = state;
      return Object.assign({}, oldState, { errors: [] });
    default:
      return state;
  }
};

export default ListingsReducer;
