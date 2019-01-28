// @flow
import React from 'react';
import cx from 'classnames';
// Style
import './style.scss';
// Types
import type { LoaderInterface } from 'declarations/loader';

function Loader({ size = 'small' }: LoaderInterface): React$Element<'div'> {
  return (
    <div className="loader loader__wrapper">
      <div
        className={cx('loader loader__container', `loader__container--${size}`)}
      >
        <div className="loader loader__blimp" />
        <div className="loader loader__blimp" />
        <div className="loader loader__blimp" />
        <div className="loader loader__blimp" />
        <div className="loader loader__ring" />
      </div>
    </div>
  );
}

export default Loader;
