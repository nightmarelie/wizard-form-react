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

import { fetch, fetchAll, create, edit, remove } from './actions';
import { Model, Action } from './model';
import db from 'database';

function* handleCreate(action: ReturnType<typeof create.request>): Generator {
  try {
    yield call(
      { context: db.users, fn: db.users.add },
      {
        ...action.payload,
        createdAt: Date.now(),
        updateAt: Date.now(),
      },
    );

    yield put(create.success(true));
  } catch (err) {
    yield put(create.failure(err));
  }
}

function* handleEdit(action: ReturnType<typeof edit.request>): Generator {
  try {
    yield call(
      { context: db.users, fn: db.users.update },
      {
        ...action.payload,
        updateAt: Date.now(),
      },
      action.payload.id,
    );

    yield put(edit.success(true));
  } catch (err) {
    yield put(edit.failure(err));
  }
}

function* handleFetch(action: ReturnType<typeof fetch.request>): Generator {
  try {
    const response: Model = yield call(
      { context: db.users, fn: db.users.get },
      action.payload,
    );

    yield put(fetch.success(response));
  } catch (err) {
    yield put(fetch.failure(err));
  }
}

function* handleFetchAll(): Generator {
  try {
    const response: Model[] = yield call({
      context: db.users,
      fn: db.users.toArray,
    });

    yield put(fetchAll.success(response));
  } catch (err) {
    yield put(fetchAll.failure(err));
  }
}

function* handleRemove(action: ReturnType<typeof remove.request>): Generator {
  try {
    yield call(
      {
        context: db.users,
        fn: db.users.delete,
      },
      action.payload,
    );

    yield put(remove.success(true));
  } catch (err) {
    yield put(remove.failure(err));
  }
}

function* watchCreateRequest(): IterableIterator<ForkEffect> {
  yield takeEvery(Action.CREATE_REQUEST, handleCreate);
}

function* watchEditRequest(): IterableIterator<ForkEffect> {
  yield takeEvery(Action.EDIT_REQUEST, handleEdit);
}

function* watchFetchRequest(): IterableIterator<ForkEffect> {
  yield takeEvery(Action.FETCH_REQUEST, handleFetch);
}

function* watchFetchAllRequest(): IterableIterator<ForkEffect> {
  yield takeEvery(Action.FETCH_ALL_REQUEST, handleFetchAll);
}

function* watchRemoveRequest(): IterableIterator<ForkEffect> {
  yield takeEvery(Action.REMOVE_REQUEST, handleRemove);
}

export function* sagas(): IterableIterator<
  AllEffect<SimpleEffect<string, ForkEffectDescriptor>>
> {
  yield all([
    fork(watchCreateRequest),
    fork(watchEditRequest),
    fork(watchFetchRequest),
    fork(watchFetchAllRequest),
    fork(watchRemoveRequest),
  ]);
}
