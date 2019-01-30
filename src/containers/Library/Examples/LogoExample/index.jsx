// @flow
import React from 'react';
import Logo from 'atoms/Logo';
import JSNinja from 'images/js_ninja.png';

function LogoExample(): React$Element<*> {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Logo Atom</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Logo Atom with image:</p>
          <Logo src={JSNinja} alt="Ninja" height="100" />
        </div>
        <div className="col">
          <p>Logo Atom with customizable text:</p>
          <Logo
            text="JSNinja"
            style={{ fontWeight: 'bold', fontStyle: 'oblique' }}
          />
        </div>
      </div>
    </>
  );
}

export default LogoExample;
