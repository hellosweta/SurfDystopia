import { RECEIVE_REGIONS, RECEIVE_REGION } from '../actions/region_actions';
import merge from 'lodash/merge';

const RegionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_REGIONS:
      return action.regions;
    case RECEIVE_REGION:
      const newRegion = {[action.region.id]: action.region};
      return merge({}, state, newRegion);
    default:
      return state;
  }
};

export default RegionsReducer;
