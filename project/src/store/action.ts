import { createAction } from '@reduxjs/toolkit';
import { ToDoItem } from '../types/to-do-item';
import { ActionType } from '../types/action';

export const addNewTask = createAction(
  ActionType.AddNewTask,
  (task: ToDoItem) => ({
    payload: task,
  }),
);

export const updateTasks =  createAction(
  ActionType.UpdateTasks,
  (tasks: ToDoItem[]) => ({
    payload: tasks,
  }),
);

export const changeStatus = createAction(
  ActionType.ChangeStatus,
  (id: string) => ({
    payload: id,
  }),
);

export const clearCompletedTasks = createAction(
  ActionType.ClearCompletedTasks,
);
