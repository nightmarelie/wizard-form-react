import { Reducer } from 'redux';
import { State, Action } from './model';

const initialState: State = {
  data: undefined,
  initDate: {},
  errors: undefined,
  meta: {
    loading: false,
  },
};

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case Action.FETCH_REQUEST:
    case Action.PUSH_REQUEST:
    case Action.REMOVE_REQUEST:
      return { ...state, meta: { loading: true } };
    case Action.FETCH_SUCCESS:
    case Action.PUSH_SUCCESS:
    case Action.REMOVE_SUCCESS:
      return { ...state, meta: { loading: false }, data: action.payload };
    case Action.FETCH_ERROR:
    case Action.PUSH_ERROR:
    case Action.REMOVE_ERROR:
      return { ...state, meta: { loading: false }, errors: action.payload };
    case Action.INITIALIZE_DATA:
      return { ...state, initDate: action.payload };
    default: {
      return state;
    }
  }
};

export { reducer };
