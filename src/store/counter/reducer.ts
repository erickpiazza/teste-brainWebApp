import { Reducer } from 'redux';
import {
  ADD_COUNTER,
  Counter,
  CounterActionTypes,
  CounterState,
  DECREMENT_COUNTER,
  DETELE_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
  SET_SELECTED_COUNTER,
} from './types';

const INITIAL_STATE: CounterState = {
  counters: [],
};

const counterReducer: Reducer<CounterState> = (
  state = INITIAL_STATE,
  action: CounterActionTypes,
) => {
  switch (action.type) {
    case SET_SELECTED_COUNTER:
      return { ...state, selectedCounter: action.payload.id };
    case ADD_COUNTER: {
      const newArrayCounter: Counter = {
        id: state.counters.length > 0 ? state.counters[state.counters.length - 1].id + 1 : 1,
        value: 0,
      };
      return {
        ...state,
        counters: [...state.counters, newArrayCounter],
      };
    }
    case DETELE_COUNTER: {
      const newArrayCounter = state.counters.filter(item => item.id !== action.payload.id);

      return { ...state, counters: newArrayCounter, selectedCounter: undefined };
    }
    case INCREMENT_COUNTER: {
      const newArrayCounter = state.counters.map(counter => {
        if (counter.id !== action.payload.id) {
          return counter;
        }
        return { ...counter, value: counter.value + 1 };
      });

      return { ...state, counters: newArrayCounter };
    }
    case DECREMENT_COUNTER: {
      const newArrayCounter = state.counters.map(counter => {
        if (counter.id !== action.payload.id) {
          return counter;
        }
        return { ...counter, value: counter.value > 0 ? counter.value - 1 : counter.value };
      });

      return { ...state, counters: newArrayCounter };
    }

    case RESET_COUNTER: {
      const newArrayCounter = state.counters.map(counter => {
        if (counter.id !== action.payload.id) {
          return counter;
        }
        return { ...counter, value: 0 };
      });

      return { ...state, counters: newArrayCounter };
    }

    default:
      return state;
  }
};

export default counterReducer;
