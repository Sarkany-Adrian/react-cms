import React from 'react';
import { shallow } from 'enzyme';

// components
import Login from 'containers/Login';
import Loader from 'atoms/Loader';
import WithLoader from './index';

const LoginWithLoader = WithLoader()(Login);

/**
 *
 */
test('should render the Loader atom, when isLoading is true', () => {
  const wrapper = shallow(<LoginWithLoader isLoading />);
  expect(wrapper.containsMatchingElement(<Loader size="large" />)).toBe(true);
});

/**
 *
 */
test('should render the Target Component, when isLoading is false', () => {
  const wrapper = shallow(<LoginWithLoader isLoading={false} />);
  expect(wrapper.containsMatchingElement(<Login />)).toBe(true);
});
