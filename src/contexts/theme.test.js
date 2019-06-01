import React from 'react';
import { mount } from 'enzyme';

// contexts
import SiteThemeProvider, { SiteThemeContext } from 'contexts/theme';

// mocks
const event = {
  target: {
    value: 'theme2'
  }
};

const MockComponent = () => (
  <SiteThemeContext.Consumer>
    {({ handleThemeChange }) => (
      <button onClick={() => handleThemeChange(event)} type="button">
        test
      </button>
    )}
  </SiteThemeContext.Consumer>
);

/**
 *
 */
test('should render SiteThemeProvider with children', () => {
  const wrapper = mount(
    <SiteThemeProvider>
      <div className="test" />
    </SiteThemeProvider>
  );
  expect(wrapper.find('.test').exists()).toBe(true);
});

/**
 *
 */
test('it should invoke the handleThemeChange method', () => {
  const wrapper = mount(
    <SiteThemeProvider>
      <MockComponent />
    </SiteThemeProvider>
  );
  const button = wrapper.find('button');
  expect(wrapper.state('theme').id).toBe(1);
  button.simulate('click');
  expect(wrapper.state('theme').id).toBe(2);
});
