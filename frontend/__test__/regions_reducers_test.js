import RegionsReducer from '../reducers/regions_reducer';
import RootReducer from '../reducers/root_reducer';
import { createStore } from 'redux';

describe('RegionsReducers', () => {
  it ('should initialize with an empty object as the default state', () => {
    expect(RegionsReducer(undefined, {})).toEqual({});
  });


});
