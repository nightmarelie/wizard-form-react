import { Model, Action } from './model';
import { createAsyncAction, createStandardAction } from 'typesafe-actions';

export const fetch = createAsyncAction(
  Action.FETCH_REQUEST,
  Action.FETCH_SUCCESS,
  Action.FETCH_ERROR,
)<undefined, Model, Error>();

export const remove = createAsyncAction(
  Action.REMOVE_REQUEST,
  Action.REMOVE_SUCCESS,
  Action.REMOVE_ERROR,
)<undefined, boolean, Error>();

export const push = createAsyncAction(
  Action.PUSH_REQUEST,
  Action.PUSH_SUCCESS,
  Action.PUSH_ERROR,
)<Model, boolean, Error>();

export const initData = createStandardAction(Action.INITIALIZE_DATA)<Model>();
