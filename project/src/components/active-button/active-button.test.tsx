import ActiveButton from './active-button';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { TaskType } from '../../const';
import { Provider } from 'react-redux';

describe('Component: ActiveButton', () => {
  it('should render correctly', () => {

    const mockStore = configureMockStore();

    const store = mockStore({tasks: []});
    const cb = jest.fn();

    render(
      <Provider store={store}>
        <ActiveButton
          onSetCurrentType={cb}
          currentType={TaskType.All}
          onSetTasks={cb}
        />
      </Provider>,
    );

    expect(screen.getByText(/Active/i)).toBeInTheDocument();
  });
});
