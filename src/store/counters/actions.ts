import { CounterActionTypes, TEST } from './types';

export function TestAction(): CounterActionTypes {
  return {
    type: TEST,
  };
}
