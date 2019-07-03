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

import Dexie from 'dexie';

import { fetch, fetchAll, create, update, remove } from './actions';
import { Model, Action, DefaultMetadata } from './model';
import db from 'database';

import * as helper from 'common/helpers';

function* handleUpdate(action: ReturnType<typeof update.request>): Generator {
  try {
    yield call({ context: db.users, fn: db.users.update }, +action.payload.id, {
      ...action.payload.data,
      updateAt: Date.now(),
      id: action.payload.id,
    });

    const response: Model = yield call(
      { context: db.users, fn: db.users.get },
      +action.payload.id,
    );

    yield put(update.success(response));
  } catch (err) {
    yield put(update.failure(err));
  }
}

function* handleFetch(action: ReturnType<typeof fetch.request>): Generator {
  let { criteria, resolve, reject } = action.payload;
  try {
    if (typeof criteria === 'string') {
      criteria = +criteria;
    }

    const response: Model = yield call(
      { context: db.users, fn: db.users.get },
      criteria,
    );

    resolve && resolve(response);
    yield put(fetch.success(response));
  } catch (err) {
    reject && reject(err);
    yield put(fetch.failure(err));
  }
}

function* handleFetchAll(
  action: ReturnType<typeof fetchAll.request>,
): Generator {
  const {
    pagination: { perPage, offset },
    searchValue = '',
  } = action.payload;
  try {
    const where = (
      users: Dexie.Table<Model, number>,
    ): Dexie.Collection<Model, number> =>
      users.where('username').startsWithIgnoreCase(searchValue);
    const total: number = yield where(db.users).count();
    const response: Model[] = yield where(db.users)
      .offset(offset)
      .limit(perPage)
      .toArray();
    yield put(
      fetchAll.success({
        data: response.map(u => ({
          ...u,
          imageUrl: helper.imgToUrl(u.image),
        })),
        meta: {
          ...action.payload,
          pagination: {
            ...action.payload.pagination,
            total,
            pageCount: Math.ceil(total / perPage),
          },
        },
      }),
    );
  } catch (err) {
    yield put(fetchAll.failure(err));
  }
}

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

    yield handleFetchAll(fetchAll.request(new DefaultMetadata()));
  } catch (err) {
    yield put(create.failure(err));
  }
}

function* handleRemove(action: ReturnType<typeof remove.request>): Generator {
  const { id, meta: matainfo } = action.payload;
  try {
    yield call(
      {
        context: db.users,
        fn: db.users.delete,
      },
      +id,
    );
    yield handleFetchAll(fetchAll.request(matainfo));
  } catch (err) {
    yield put(remove.failure(err));
  }
}

function* watchCreateRequest(): IterableIterator<ForkEffect> {
  yield takeEvery(Action.CREATE_REQUEST, handleCreate);
}

function* watchUpdateRequest(): IterableIterator<ForkEffect> {
  yield takeEvery(Action.UPDATE_REQUEST, handleUpdate);
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
    fork(watchUpdateRequest),
    fork(watchFetchRequest),
    fork(watchFetchAllRequest),
    fork(watchRemoveRequest),
  ]);
}
