import { Reducer } from 'redux';
import { CounterActionTypes, CounterState, SET_SELECTED_COUNTER, TEST } from './types';

const INITIAL_STATE: CounterState = {
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 2 },
  ],
  selectedCounter: 1,
};

const counterReducer: Reducer<CounterState> = (state = INITIAL_STATE, action: CounterActionTypes) => {
  switch (action.type) {
    case TEST:
      return { ...state };
    case SET_SELECTED_COUNTER:
      return { ...state, selectedCounter: action.payload.id };
    default:
      return state;
  }
};

export default counterReducer;
