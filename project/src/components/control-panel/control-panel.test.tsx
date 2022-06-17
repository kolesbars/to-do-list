import ControlPanel from './control-panel';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { TaskType } from '../../const';
import { Provider } from 'react-redux';

describe('Component: ControlPanel', () => {
  it('should render correctly', () => {

    const mockStore = configureMockStore();

    const store = mockStore({tasks: []});
    const cb = jest.fn();

    render(
      <Provider store={store}>
        <ControlPanel
          onSetCurrentType={cb}
          currentType={TaskType.All}
          onSetTasks={cb}
        />
      </Provider>,
    );

    expect(screen.getByText(/All/i)).toBeInTheDocument();
    expect(screen.getByText(/Active/i)).toBeInTheDocument();
    expect(screen.getByText(/items left/i)).toBeInTheDocument();
  });
});
