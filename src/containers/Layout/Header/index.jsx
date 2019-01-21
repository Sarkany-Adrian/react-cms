// @flow
import React, { type Node } from 'react';
// style
import './styles.scss';

type Props = {
  left: Node,
  center?: Node,
  right: Node
};

function Header({ left, center, right }: Props): React$Element<'div'> {
  return (
    <div className="app-header">
      <div className="h-100 row">
        <div className="app-header__left col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
          {left}
        </div>
        <div
          className={`app-header__center col-12 col-sm-4 col-md-4 col-lg-6 col-xl-6 ${
            !center ? 'd-none d-sm-block' : ''
          }`}
        >
          {center}
        </div>
        <div className="app-header__right col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
          {right}
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  center: ''
};

export default Header;
