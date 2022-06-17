import ClearButton from './clear-button';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';

describe('Component: ClearButton', () => {
  it('should render correctly', () => {

    const mockStore = configureMockStore();

    const store = mockStore({tasks: []});
    const cb = jest.fn();

    render(
      <Provider store={store}>
        <ClearButton
          onSetCurrentType={cb}
        />
      </Provider>,
    );

    expect(screen.getByText(/clear completed/i)).toBeInTheDocument();
  });
});
