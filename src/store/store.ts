import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CounterState } from './counter/types';
import { rootReducer } from './rootReducer';

export interface ApplicationState {
  counterState: CounterState;
}

const store = createStore(rootReducer, composeWithDevTools());
export default store;
