import {
  all,
  fork,
  AllEffect,
  SimpleEffect,
  ForkEffectDescriptor,
} from 'redux-saga/effects';
import { sagas as userSagas } from './user';
import { sagas as abandonUserSagas } from './abandonUser';

export function* rootSaga(): IterableIterator<
  AllEffect<SimpleEffect<string, ForkEffectDescriptor>>
> {
  yield all([fork(userSagas), fork(abandonUserSagas)]);
}
