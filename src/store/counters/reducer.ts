import { Reducer } from 'redux';
import { CounterActionTypes, CounterState, TEST } from './types';

const INITIAL_STATE: CounterState = {
  counters: [],
};

const counterReducer: Reducer<CounterState> = (
  state = INITIAL_STATE,
  action: CounterActionTypes,
) => {
  switch (action.type) {
    case TEST:
      console.log('teste reducer funcionou');
      return { ...state };

    default:
      return state;
  }
};

export default counterReducer;
