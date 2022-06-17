import { ToDoItem } from '../../types/to-do-item';
import { createSelector } from 'reselect';
import {TaskList} from '../../types/state';

export const getTasks = (state: TaskList): ToDoItem[] => state.tasks;

export const selectCompletedTasks = () => createSelector(getTasks, (tasks) => tasks.filter((task) => task.isChecked === true));
export const selectActiveTasks = () => createSelector(getTasks, (tasks) => tasks.filter((task) => task.isChecked === false));
