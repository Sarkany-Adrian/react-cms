// @flow
import React from 'react';
import Image from 'atoms/Image';
import JSNinja from 'images/js_ninja.png';

function ImageExample(): React$Element<*> {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Image Atom:</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Image:</p>
          <Image alt="JSNinja" src={JSNinja} height="100" />
        </div>
        <div className="col">
          <p>Image with error:</p>
          <Image alt="Image" src="" height="100" />
        </div>
      </div>
    </>
  );
}

export default ImageExample;
