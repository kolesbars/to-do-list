import AllButton from './all-button';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { TaskType } from '../../const';
import { Provider } from 'react-redux';

describe('Component: AllButton', () => {
  it('should render correctly', () => {

    const mockStore = configureMockStore();

    const store = mockStore({tasks: []});
    const cb = jest.fn();

    render(
      <Provider store={store}>
        <AllButton
          onSetCurrentType={cb}
          currentType={TaskType.All}
          onSetTasks={cb}
        />
      </Provider>,
    );

    expect(screen.getByText(/All/i)).toBeInTheDocument();
  });
});
