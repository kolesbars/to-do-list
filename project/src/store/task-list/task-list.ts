import { addNewTask, changeStatus, clearCompletedTasks, updateTasks } from '../action';
import { TaskList } from '../../types/state';
import { createReducer } from '@reduxjs/toolkit';

const initialState: TaskList = {
  tasks: [],
};

const taskList = createReducer(initialState, (builder) => {
  builder
    .addCase(addNewTask, (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    })
    .addCase(updateTasks, (state, action) => {
      state.tasks = action.payload;
    })
    .addCase(clearCompletedTasks, (state) => {
      state.tasks = state.tasks.filter((task) => task.isChecked === false);
    })
    .addCase(changeStatus, (state, action) => {
      const item = state.tasks.find((task) => task.id === action.payload);
      if(item) {
        item.isChecked = !item.isChecked;
      }
    });
});

export {taskList};
