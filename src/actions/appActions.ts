import {createAction} from 'typesafe-actions';
import {AppReducerState} from '../reducers/appReducer';

export const setStoreState = createAction(
  'APP_SET_STORE_STATE',
  (state: Partial<AppReducerState>) => state,
)();
