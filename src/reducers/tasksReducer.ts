'use strict';
import {fetchListAsync, setList} from 'src/actions/tasksActions';
import {Task} from 'src/typings';
import {createReducer} from 'typesafe-actions';
import {TasksAction} from 'src/actions/actionTypes';

export interface TasksState {
  tasks?: Task[];
}

const initialState: TasksState = {};

const tasksReducer = createReducer<TasksState, TasksAction>(initialState)
  .handleAction(fetchListAsync.success, (state, action) => ({
    ...state,
    tasks: action.payload,
  }))
  .handleAction(setList, (state, action) => ({
    ...state,
    tasks: action.payload,
  }));

export default tasksReducer;
