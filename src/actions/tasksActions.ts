import {createAction, createAsyncAction} from 'typesafe-actions';
import {Task} from '../typings';

export const fetchListAsync = createAsyncAction(
  ['LIST_FETCH', (userID: string) => userID],
  ['LIST_FETCH_SUCCESS', (res: Task[]) => res],
  ['LIST_FETCH_FAILURE', (err: Error) => err],
  'LIST_FETCH_CANCEL',
)();

export const setList = createAction('LIST_SET', (tasks?: Task[]) => tasks)();
