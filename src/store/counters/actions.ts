import { CounterActionTypes, SET_SELECTED_COUNTER, TEST } from './types';

export function testAction(): CounterActionTypes {
  return {
    type: TEST,
  };
}

export function setSelectedAction(id: number): CounterActionTypes {
  return {
    type: SET_SELECTED_COUNTER,
    payload: { id },
  };
}
