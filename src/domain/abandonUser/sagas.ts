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

import { fetch, push, remove } from './actions';
import { Model, Action } from './model';
import db from 'database';

const DEFAULT_KEY = 1;

function* handleFetch(): Generator {
  try {
    const response: Model = yield call(
      {
        context: db.abandonUsers,
        fn: db.users.get,
      },
      DEFAULT_KEY,
    );

    yield put(fetch.success(response));
  } catch (err) {
    yield put(fetch.failure(err));
  }
}

function* handlePush(action: ReturnType<typeof push.request>): Generator {
  try {
    yield call(
      {
        context: db.abandonUsers,
        fn: db.users.put,
      },
      action.payload,
      DEFAULT_KEY,
    );

    yield put(push.success(true));
  } catch (err) {
    yield put(push.failure(err));
  }
}

function* handleRemove(): Generator {
  try {
    yield call(
      {
        context: db.abandonUsers,
        fn: db.users.clear,
      },
      DEFAULT_KEY,
    );

    yield put(remove.success(true));
  } catch (err) {
    yield put(remove.failure(err));
  }
}

function* watchFetchRequest(): IterableIterator<ForkEffect> {
  yield takeEvery(Action.FETCH_REQUEST, handleFetch);
}

function* watchPushRequest(): IterableIterator<ForkEffect> {
  yield takeEvery(Action.PUSH_REQUEST, handlePush);
}

function* watchRemoveRequest(): IterableIterator<ForkEffect> {
  yield takeEvery(Action.REMOVE_REQUEST, handleRemove);
}

export function* sagas(): IterableIterator<
  AllEffect<SimpleEffect<string, ForkEffectDescriptor>>
> {
  yield all([
    fork(watchFetchRequest),
    fork(watchPushRequest),
    fork(watchRemoveRequest),
  ]);
}
