import AddTaskField from './add-task-field';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';

describe('Component: AddTaskField', () => {
  it('should render correctly', () => {

    const mockStore = configureMockStore();

    const store = mockStore({tasks: []});

    render(
      <Provider store={store}>
        <AddTaskField/>
      </Provider>,
    );

    expect(screen.getByTestId('add-field')).toBeInTheDocument();
  });
});
