import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import { reducer as formReducer } from 'domain/form/reducer';
import { reducer as userReducer } from 'domain/user/reducer';
import { reducer as abandonUserReducer } from 'domain/abandonUser/reducer';

export default function createReducer(history: History): Reducer {
  return combineReducers({
    router: connectRouter(history),
    form: formReducer,
    users: userReducer,
    abandonUser: abandonUserReducer,
  });
}
