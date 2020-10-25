import {
  ADD_COUNTER,
  CounterActionTypes,
  DECREMENT_COUNTER,
  DETELE_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
  SET_SELECTED_COUNTER,
} from './types';

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

export function incrementCounterAction(id: number): CounterActionTypes {
  return {
    type: INCREMENT_COUNTER,
    payload: { id },
  };
}

export function decrementCounterAction(id: number): CounterActionTypes {
  return {
    type: DECREMENT_COUNTER,
    payload: { id },
  };
}

export function resetCounterAction(id: number): CounterActionTypes {
  return {
    type: RESET_COUNTER,
    payload: { id },
  };
}
