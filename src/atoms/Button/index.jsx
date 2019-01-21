// @flow
import React from 'react';
import cx from 'classnames';
import './styles.scss';

type Props = {
  children: React$Element<*> | string,
  onClick: (e: SyntheticKeyboardEvent<*>) => void,
  className?: string
};

function Button({
  children,
  onClick,
  className
}: Props): React$Element<'button'> {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx('button-atom', className)}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: ''
};

export default Button;
