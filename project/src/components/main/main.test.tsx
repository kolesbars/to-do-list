import Main from './main';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';

describe('Component: Main', () => {
  it('should render correctly', () => {

    const mockStore = configureMockStore();

    const store = mockStore({tasks: []});

    render(
      <Provider store={store}>
        <Main/>
      </Provider>,
    );

    expect(screen.getByText(/todos/i)).toBeInTheDocument();
    expect(screen.getByText(/Active/i)).toBeInTheDocument();
    expect(screen.getByText(/items left/i)).toBeInTheDocument();
    expect(screen.getByTestId('add-field')).toBeInTheDocument();
    expect(screen.getByTestId('task-list')).toBeInTheDocument();
  });

});
