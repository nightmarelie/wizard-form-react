import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import * as user from 'domain/user';

export default function createReducer(history: History): Reducer {
  return combineReducers({
    router: connectRouter(history),
    form: formReducer,
    ...user.reducer,
  });
}
