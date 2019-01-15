// @flow
import React, { Component } from 'react';
// atoms
import Button from 'atoms/Button';
// mobx
import { inject, observer } from 'mobx-react';
import { enableLogging } from 'mobx-logger';

enableLogging();
// style
import './style.scss';

type Props = {
  auth: Object
};

@inject(['auth'])
@observer
class Login extends Component<*, Props> {
  onClick = (e: SyntheticKeyboardEvent<*>) => {
    const { auth, history } = this.props;
    e.preventDefault();
    auth.setLoggedIn(true);

    history.push('/');
  };

  render() {
    return (
      <div className="login-wrapper">
        <p>Login to continue:</p>
        <Button onClick={this.onClick}>Login</Button>
      </div>
    );
  }
}

export default Login;
