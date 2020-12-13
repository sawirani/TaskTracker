import { createAction, props } from '@ngrx/store';
import { Task } from '../models';

export const UPDATE_TASK = '[UPDATE_TASK] Update Task API ';
export const UPDATE_TASK_SUCCESS = '[UPDATE_TASK] Update Task API Success';
export const UPDATE_TASK_FAILURE = '[UPDATE_TASK] Update Task API Failure';

export const updateTask = createAction(
  UPDATE_TASK,
  props<Task>()
);

export const updateTaskSuccess = createAction(
  UPDATE_TASK,
  props<Task>()
);

export const updateTaskFailure = createAction(
  UPDATE_TASK,
  props<Task>()
);
