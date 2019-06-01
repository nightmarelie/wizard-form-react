import { User, Action as UserAction } from './model';
import { createAsyncAction } from 'typesafe-actions';

export const fetchRequest = createAsyncAction(
  UserAction.FETCH_REQUEST,
  UserAction.FETCH_SUCCESS,
  UserAction.FETCH_ERROR,
)<string, User[], Error>();
