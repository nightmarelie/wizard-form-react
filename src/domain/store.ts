import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, RouterState } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';

import { rootSaga } from './sagas';
import createRootReducer from './reducers';

export interface ApplicationState {
  router: RouterState;
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
