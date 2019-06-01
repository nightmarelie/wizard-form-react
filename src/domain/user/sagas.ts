import { call, put, takeEvery, all, fork } from 'redux-saga/effects';

import { fetchRequest } from './actions';
import { User, Action } from './model';
import db from 'database';

function* handleFetch(
  action: ReturnType<typeof fetchRequest.request>,
): Generator {
  try {
    const response: User[] = yield call(
      { context: db.users, fn: db.users.get } as any,
      action.payload,
    );

    yield put(fetchRequest.success(response));
  } catch (err) {
    yield put(fetchRequest.failure(err));
  }
}

function* watchFetchRequest() {
  yield takeEvery(Action.FETCH_REQUEST, handleFetch);
}

export function* userSagas() {
  yield all([fork(watchFetchRequest)]);
}
