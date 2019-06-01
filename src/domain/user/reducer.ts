import { Reducer } from 'redux';
import { State, Action } from './model';

const initialState: State = {
  data: [],
  errors: undefined,
  meta: {
    loading: false,
    // TODO: pagination
  },
};

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case Action.FETCH_REQUEST: {
      return { ...state, meta: { loading: true } };
    }
    case Action.FETCH_SUCCESS: {
      return { ...state, meta: { loading: false }, data: action.payload };
    }
    case Action.FETCH_ERROR: {
      return { ...state, meta: { loading: false }, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
