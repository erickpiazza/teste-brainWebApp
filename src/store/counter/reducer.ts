import { Value } from 'react-native-reanimated';
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
      let isSelectedCounter: number | undefined;
      const newArrayCounter: Counter = {
        id: state.counters.length > 0 ? state.counters[state.counters.length - 1].id + 1 : 1,
        value: 0,
      };
      if (!state.selectedCounter) {
        isSelectedCounter = newArrayCounter.id;
      } else {
        isSelectedCounter = state.selectedCounter;
      }

      return {
        ...state,
        counters: [...state.counters, newArrayCounter],
        selectedCounter: isSelectedCounter,
      };
    }
    case DETELE_COUNTER: {
      let newCounterSelected: number | undefined;

      const newArrayCounter = state.counters.filter((item, index) => item.id !== action.payload.id);

      if (newArrayCounter.length > 0) {
        newCounterSelected = newArrayCounter[0].id;
      }

      return { ...state, counters: newArrayCounter, selectedCounter: newCounterSelected };
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