// @flow
import React, { PureComponent } from 'react';
import Input from 'atoms/Input';

type TState = {
  value: string,
  error: string
};

class InputExample extends PureComponent<{}, TState> {
  state = {
    value: '',
    error: ''
  };

  onChange = (value: string) => {
    this.setState({ value });
  };

  validate = (value: string) => {
    if (value.length > 5) this.setState({ error: 'Max 5 characters allowed.' });
    else this.setState({ error: '' });
  };

  sanitize = (value: string): string => value.replace(/\W/g, '');

  render() {
    const { value, error } = this.state;
    const errorStyle = error
      ? { border: '2px solid red', outline: 'none' }
      : {};

    return (
      <div className="row">
        <div className="col">
          <h1>Input Atom</h1>
          <p>With sanitizing and error handling:</p>
          <Input
            value={value}
            validate={this.validate}
            onChange={this.onChange}
            sanitize={this.sanitize}
            style={errorStyle}
          />
          <p style={{ color: 'red' }}>{error}</p>
        </div>
      </div>
    );
  }
}

export default InputExample;
