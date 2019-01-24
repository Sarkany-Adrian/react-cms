import React from 'react';
import { shallow } from 'enzyme';
import Login from 'containers/Login';
import WithLoader from './index';
import Loader from '../Atom';

const LoginWithLoader = WithLoader()(Login);

describe('Loader decorator component', () => {
  it('should render the Loader atom, when isLoading is true', () => {
    const wrapper = shallow(<LoginWithLoader isLoading />);
    expect(wrapper.containsMatchingElement(<Loader size="large" />)).toBe(true);
  });
  it('should render the Target Component, when isLoading is false', () => {
    const wrapper = shallow(<LoginWithLoader isLoading={false} />);
    expect(wrapper.containsMatchingElement(<Login />)).toBe(true);
  });
});
