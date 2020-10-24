export const SET_SELECTED_COUNTER = 'SET_SELECTED_COUNTER';
export const ADD_COUNTER = 'ADD_COUNTER';
export const DETELE_COUNTER = 'DETELE_COUNTER';

export interface Counter {
  id: number;
  value: number;
}

export interface CounterState {
  readonly counters: Counter[];
  readonly selectedCounter?: number;
}
export interface SetSelectedAction {
  type: typeof SET_SELECTED_COUNTER;
  payload: { id: number };
}
export interface AddCounterAction {
  type: typeof ADD_COUNTER;
}
export interface DeleteCounterAction {
  type: typeof DETELE_COUNTER;
  payload: { id: number };
}

export type CounterActionTypes = SetSelectedAction | AddCounterAction | DeleteCounterAction;
