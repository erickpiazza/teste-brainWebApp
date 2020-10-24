import { ADD_COUNTER, CounterActionTypes, DETELE_COUNTER, SET_SELECTED_COUNTER } from './types';

export function setSelectedAction(id: number): CounterActionTypes {
  return {
    type: SET_SELECTED_COUNTER,
    payload: { id },
  };
}

export function addCounterAction(): CounterActionTypes {
  return {
    type: ADD_COUNTER,
  };
}

export function deleteCounterAction(id: number): CounterActionTypes {
  return {
    type: DETELE_COUNTER,
    payload: { id },
  };
}
