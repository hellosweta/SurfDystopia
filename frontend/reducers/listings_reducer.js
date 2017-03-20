import { RECEIVE_LISTINGS, RECEIVE_LISTING, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/listing_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  listings: {},
  errors: []
});

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let oldState = merge({}, state);

  switch (action.type) {
    case RECEIVE_LISTINGS:
      return merge({}, action.listings);
    case RECEIVE_LISTING:
      const newListing = {[action.listing.id]: action.listing};
      return merge({}, state, newListing);
    // case RECEIVE_ERRORS:
    //   const errors = action.errors;
    //   return merge({}, oldState, {
    //     errors
    //   });
    //
    // case CLEAR_ERRORS:
    //   return Object.assign({}, oldState, { errors: [] });
    default:
      return state;
  }
};

export default ListingsReducer;
