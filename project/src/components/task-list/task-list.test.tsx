import TaskList from './task-list';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';

describe('Component: TaskList', () => {
  it('should render correctly', () => {

    const mockStore = configureMockStore();

    const store = mockStore({tasks: []});

    render(
      <Provider store={store}>
        <TaskList
          tasks={[]}
        />
      </Provider>,
    );

    expect(screen.getByTestId('task-list')).toBeInTheDocument();
  });
});
