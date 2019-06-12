import { Model, Action, UpdatePayload, FetchPayload } from './model';
import { createAsyncAction, createStandardAction } from 'typesafe-actions';

export const fetch = createAsyncAction(
  Action.FETCH_REQUEST,
  Action.FETCH_SUCCESS,
  Action.FETCH_ERROR,
)<FetchPayload, Model, Error>();

export const fetchAll = createAsyncAction(
  Action.FETCH_ALL_REQUEST,
  Action.FETCH_ALL_SUCCESS,
  Action.FETCH_ALL_ERROR,
)<undefined, Model[], Error>();

export const remove = createAsyncAction(
  Action.REMOVE_REQUEST,
  Action.REMOVE_SUCCESS,
  Action.REMOVE_ERROR,
)<number, Model[], Error>();

export const create = createAsyncAction(
  Action.CREATE_REQUEST,
  Action.CREATE_SUCCESS,
  Action.CREATE_ERROR,
)<Model, boolean, Error>();

export const update = createAsyncAction(
  Action.UPDATE_REQUEST,
  Action.UPDATE_SUCCESS,
  Action.UPDATE_ERROR,
)<UpdatePayload, Model, Error>();

export const initData = createStandardAction(Action.INITIALIZE_DATA)<Model>();
