// @flow
import React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  children: React$Element<*> | string,
  handleClick: (e: SyntheticKeyboardEvent<*>) => void
};

function Btn(props: Props): React$Element<'button'> {
  const { children, handleClick } = props;

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={(e: SyntheticKeyboardEvent<*>) => handleClick(e)}
    >
      {children}
    </Button>
  );
}

export default Btn;
