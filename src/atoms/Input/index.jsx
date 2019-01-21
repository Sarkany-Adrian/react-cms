// @flow
import React, { PureComponent } from 'react';
import omit from 'lodash.omit';

type Props = {
  value: string,
  onChange: (value: string) => void,
  sanitize?: (value: string) => string,
  validate?: (value: string) => void,
  rest?: Object
};

class Input extends PureComponent<Props> {
  static defaultProps = {
    sanitize: undefined,
    validate: undefined,
    rest: undefined
  };

  handleChange = (e: SyntheticInputEvent<*>) => {
    const { sanitize, validate, onChange } = this.props;
    let { value } = e.target;

    if (typeof sanitize === 'function') value = sanitize(value);
    if (typeof validate === 'function') validate(value);

    onChange(value);
  };

  render() {
    const { value, ...rest } = this.props;
    const inputProps = omit(rest, 'value', 'onChange', 'validate', 'sanitize');

    return (
      <input
        type="text"
        value={value}
        onChange={this.handleChange}
        {...inputProps}
      />
    );
  }
}

export default Input;
