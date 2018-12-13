// @flow
import React, { PureComponent } from 'react';
// style
import './style.scss';
// atoms
import Btn from 'atoms/Btn';

class Login extends PureComponent<{}> {
  handleClick = (e: SyntheticKeyboardEvent<*>) => {
    e.preventDefault(); // just a placeholder
  };

  render() {
    return (
      <div className="login-wrapper">
        <p>login page</p>
        <Btn handleClick={this.handleClick}>Login</Btn>
      </div>
    );
  }
}

export default Login;
