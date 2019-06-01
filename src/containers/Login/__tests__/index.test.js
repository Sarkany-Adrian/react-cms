import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Login from 'containers/Login';

const auth = {
  isLoggedIn: false,
  setLoggedIn: jest.fn()
};
const history = {
  push: jest.fn()
};

/**
 *
 */
test('should render the login container', () => {
  const wrapper = shallow(<Login.wrappedComponent auth={auth} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

/**
 *
 */
test('sould call on click class method', () => {
  const wrapper = shallow(
    <Login.wrappedComponent auth={auth} history={history} />
  );
  const event = {
    preventDefault: jest.fn()
  };
  wrapper.instance().onClick(event);
  expect(event.preventDefault).toHaveBeenCalled();
  expect(auth.setLoggedIn).toHaveBeenCalled();
  expect(history.push).toHaveBeenCalled();
});
