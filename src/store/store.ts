import { createStore } from 'redux';
import { CounterState } from './counters/types';
import rootReducer from './rootReducer';

export interface ApplicationState {
  counterState: CounterState;
}

const store = createStore(rootReducer);

export default store;
