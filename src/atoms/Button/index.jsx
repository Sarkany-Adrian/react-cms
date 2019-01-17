// @flow
import React from 'react';

type Props = {
  children: React$Element<*> | string,
  onClick: (e: SyntheticKeyboardEvent<*>) => void
};

function Button(props: Props): React$Element<'button'> {
  const { children, onClick } = props;

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
