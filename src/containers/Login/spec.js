import React from 'react';
import { shallow } from 'enzyme';

import Login from 'containers/Login';
import Button from 'atoms/Button';

const setLoggedIn = jest.fn();
const onClick = jest.fn();

const auth = {
  isLoggedIn: false,
  setLoggedIn
};

describe('Login container', () => {
  it('should render the login container', () => {
    const wrapper = shallow(<Login auth={auth} />);
    expect(
      wrapper.equals(
        <div className="login-wrapper">
          <p>Login to continue:</p>
          <Button onClick={onClick}>Login</Button>
        </div>
      )
    ).toBe(true);
  });
});
