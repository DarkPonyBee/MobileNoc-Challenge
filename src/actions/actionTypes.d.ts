import {ActionType} from 'typesafe-actions';
import * as appActions from './appActions';
import * as tasksActions from './tasksActions';

export type AppAction = ActionType<typeof appActions>;
export type TasksAction = ActionType<typeof tasksActions>;

export type RootAction = AppAction | TasksAction;
