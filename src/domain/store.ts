import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, RouterState } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import { FormState } from 'redux-form';

import { rootSaga } from './sagas';
import createRootReducer from './reducers';

import { State as AbandonUserState } from './abandonUser/model';
import { State as UserState } from './user/model';

export interface ApplicationState {
  form: FormState;
  router: RouterState;
  abandonUser: AbandonUserState;
  users: UserState;
}

export default function configureStore(
  history: History,
): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    composeEnhancers(
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
