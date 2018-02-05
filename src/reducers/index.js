import { combineReducers } from 'redux';

const reducers = combineReducers({
  victim: victimReducer,
  place: placeReducer
})
