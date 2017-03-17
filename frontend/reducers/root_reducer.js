import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ListingsReducer from './listings_reducer';
import RegionsReducer from './regions_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  listings: ListingsReducer,
  regions: RegionsReducer
});

export default rootReducer;
