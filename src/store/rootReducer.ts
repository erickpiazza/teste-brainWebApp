import { combineReducers } from 'redux';

import counterReducer from './counters/reducer';

export default combineReducers({
  counterReducer,
});
