import { Model, Action } from './model';
import { createAsyncAction } from 'typesafe-actions';

export const fetchRequest = createAsyncAction(
  Action.FETCH_REQUEST,
  Action.FETCH_SUCCESS,
  Action.FETCH_ERROR,
)<string, Model[], Error>();
