import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { taskList } from './store/task-list/task-list';

const store = configureStore({
  reducer: taskList,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
