import { taskList } from './task-list';
import { addNewTask, updateTasks, changeStatus, clearCompletedTasks} from '../action';

describe('Reducer: taskList', () => {
  it('withot additional parametrs should return initial state', () => {
    expect(taskList(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        tasks: [],
      });
  });

  it('should add new task in list', () => {
    const state = {
      tasks: [],
    };

    const newTask = {
      task: '',
      isChecked: false,
      id: '',
    };

    expect(taskList(state, addNewTask(newTask)))
      .toEqual({
        tasks: [newTask],
      });
  });

  it('should update task list', () => {
    const state = {
      tasks: [{
        task: '',
        isChecked: false,
        id: '',
      }],
    };

    const newTaskList = [{
      task: '',
      isChecked: false,
      id: '',
    }, {
      task: '',
      isChecked: true,
      id: '',
    }];

    expect(taskList(state, updateTasks(newTaskList)))
      .toEqual({
        tasks: newTaskList,
      });
  });

  it('should change checked status', () => {
    const state = {
      tasks: [{
        task: '',
        isChecked: false,
        id: '1',
      }],
    };


    expect(taskList(state, changeStatus('1')))
      .toEqual({
        tasks: [{
          task: '',
          isChecked: true,
          id: '1',
        }],
      });
  });

  it('should clear completed tasks', () => {
    const state = {
      tasks: [{
        task: '',
        isChecked: false,
        id: '',
      },
      {
        task: '',
        isChecked: true,
        id: '',
      }],
    };


    expect(taskList(state, clearCompletedTasks()))
      .toEqual({
        tasks: [{
          task: '',
          isChecked: false,
          id: '',
        }],
      });
  });
});
