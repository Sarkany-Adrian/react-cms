// @flow
import React from 'react';
import './loader-style.scss';

function Loader(): React$Element<'div'> {
  return (
    <div className="loader loader__container">
      <div className="loader loader__blimp" />
      <div className="loader loader__blimp" />
      <div className="loader loader__blimp" />
      <div className="loader loader__blimp" />
      <div className="loader loader__ring" />
    </div>
  );
}

export default Loader;
