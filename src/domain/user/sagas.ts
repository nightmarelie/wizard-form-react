import {
  call,
  put,
  takeEvery,
  all,
  fork,
  ForkEffect,
  AllEffect,
  SimpleEffect,
  ForkEffectDescriptor,
} from 'redux-saga/effects';

import { fetchRequest } from './actions';
import { Model, Action } from './model';
import db from 'database';

function* handleFetch(
  action: ReturnType<typeof fetchRequest.request>,
): Generator {
  try {
    const response: Model[] = yield call(
      { context: db.users, fn: db.users.get },
      action.payload,
    );

    yield put(fetchRequest.success(response));
  } catch (err) {
    yield put(fetchRequest.failure(err));
  }
}

function* watchFetchRequest(): IterableIterator<ForkEffect> {
  yield takeEvery(Action.FETCH_REQUEST, handleFetch);
}

export function* sagas(): IterableIterator<
  AllEffect<SimpleEffect<string, ForkEffectDescriptor>>
> {
  yield all([fork(watchFetchRequest)]);
}
