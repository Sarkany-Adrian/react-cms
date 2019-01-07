// @flow
import React from 'react';

type Props = {
  children: React$Element<*> | string,
  handleClick: (e: SyntheticKeyboardEvent<*>) => void
};

function Button(props: Props): React$Element<'button'> {
  const { children, handleClick } = props;

  return (
    <button
      type="button"
      onClick={(e: SyntheticKeyboardEvent<*>) => handleClick(e)}
    >
      {children}
    </button>
  );
}

export default Button;
