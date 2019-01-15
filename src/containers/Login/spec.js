import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Login from 'containers/Login';

const auth = {
  isLoggedIn: false,
  setLoggedIn: jest.fn()
};

describe('Login container', () => {
  it('should render the login container', () => {
    const wrapper = shallow(<Login.wrappedComponent auth={auth} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
