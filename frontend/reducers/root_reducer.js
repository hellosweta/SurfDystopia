import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ListingsReducer from './listings_reducer';
import RegionsReducer from './regions_reducer';
import ReviewsReducer from './reviews_reducer';
import BookingsReducer from './bookings_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  listings: ListingsReducer,
  regions: RegionsReducer,
  reviews: ReviewsReducer,
  bookings: BookingsReducer,
});

export default rootReducer;
