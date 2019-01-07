// @flow
import React, { Component } from 'react';
// atoms
import Btn from 'atoms/Btn';
// mobx
import { inject, observer } from 'mobx-react';
// import { when } from 'mobx';
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
  handleClick = (e: SyntheticKeyboardEvent<*>) => {
    const { auth, history } = this.props;
    e.preventDefault();
    auth.setLoggedIn(true);

    history.push('/');
  };

  render() {
    return (
      <div className="login-wrapper">
        <p>Login to continue:</p>
        <Btn handleClick={this.handleClick}>Login</Btn>
      </div>
    );
  }
}

export default Login;
