import { Reducer } from 'redux';
import { State, Action } from './model';

const initialState: State = {
  data: undefined,
  initDate: {} as any,
  errors: undefined,
  meta: {
    loading: false,
  },
};

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case Action.CREATE_REQUEST:
    case Action.EDIT_REQUEST:
    case Action.FETCH_REQUEST:
    case Action.FETCH_ALL_REQUEST:
    case Action.REMOVE_REQUEST:
      return { ...state, meta: { loading: true } };
    case Action.CREATE_SUCCESS:
    case Action.EDIT_SUCCESS:
    case Action.FETCH_SUCCESS:
    case Action.FETCH_ALL_SUCCESS:
    case Action.REMOVE_SUCCESS:
      return { ...state, meta: { loading: false }, data: action.payload };
    case Action.CREATE_ERROR:
    case Action.EDIT_ERROR:
    case Action.FETCH_ERROR:
    case Action.FETCH_ALL_ERROR:
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
