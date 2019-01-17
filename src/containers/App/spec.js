import React from 'react';
import { shallow, mount } from 'enzyme';
import App from 'containers/App';
import Layout from 'containers/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from 'stores';
import ErrorBoundary from 'components/ErrorBoundary';
import AppError from 'components/AppError';

describe('App container', () => {
  it('Should render the App container with Layout component', () => {
    const wrapper = shallow(<App />);
    const layout = wrapper.find(Layout);
    expect(layout.exists()).toBe(true);
  });

  it('Should render the App container with AppError component', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Provider {...stores}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const errorBoundary = wrapper.find(ErrorBoundary);
    const err = new Error('Oups!');
    errorBoundary.simulateError(err);
    expect(errorBoundary.exists()).toBe(true);
    const appError = wrapper.find(AppError);
    expect(appError.exists()).toBe(true);
  });
});
