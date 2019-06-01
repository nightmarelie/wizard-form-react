import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import * as user from 'domain/user';

export default function createReducer(history: History): Reducer {
  return combineReducers({
    router: connectRouter(history),
    ...user.reducer,
  });
}
