export const TEST = 'TEST';
export const SET_SELECTED_COUNTER = 'SET_SELECTED_COUNTER';

export interface Counter {
  id: number;
  value: number;
}

export interface CounterState {
  readonly counters: Counter[];
  readonly selectedCounter?: number;
}

export interface Test {
  type: typeof TEST;
}
export interface SetSelectedAction {
  type: typeof SET_SELECTED_COUNTER;
  payload: { id: number };
}

export type CounterActionTypes = Test | SetSelectedAction;
