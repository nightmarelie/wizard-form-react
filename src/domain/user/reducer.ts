import { Reducer } from 'redux';
import { State, Action, DefaultMetadata } from './model';

const initialState: State = {
  data: undefined,
  initData: {} as any,
  errors: undefined,
  meta: {
    loading: false,
    ...DefaultMetadata.create(),
  },
};

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case Action.CREATE_REQUEST:
    case Action.UPDATE_REQUEST:
    case Action.FETCH_REQUEST:
    case Action.FETCH_ALL_REQUEST:
    case Action.REMOVE_REQUEST:
      return { ...state, meta: { ...state.meta, loading: true } };
    case Action.CREATE_SUCCESS:
    case Action.UPDATE_SUCCESS:
    case Action.FETCH_SUCCESS:
    case Action.REMOVE_SUCCESS:
      return {
        ...state,
        meta: { ...state.meta, loading: false },
        data: action.payload,
      };
    case Action.FETCH_ALL_SUCCESS:
      return {
        ...state,
        meta: { ...action.payload.meta, loading: false },
        data: action.payload.data,
      };
    case Action.CREATE_ERROR:
    case Action.UPDATE_ERROR:
    case Action.FETCH_ERROR:
    case Action.FETCH_ALL_ERROR:
    case Action.REMOVE_ERROR:
      return {
        ...state,
        meta: { ...state.meta, loading: false },
        errors: action.payload,
      };
    case Action.INITIALIZE_DATA:
      return { ...state, initData: action.payload };
    default: {
      return state;
    }
  }
};

export { reducer };
