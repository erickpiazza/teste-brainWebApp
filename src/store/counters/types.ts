export const TEST = 'TEST';

export interface Counter {
  id: number;
  name: string;
  value: number;
}

export interface CounterState {
  readonly counters: Counter[];
}

export interface Test {
  type: typeof TEST;
}

export type CounterActionTypes = Test;
