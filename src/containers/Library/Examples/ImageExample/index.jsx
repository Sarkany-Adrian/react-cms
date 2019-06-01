// @flow
import React from 'react';
import Image from 'atoms/Image';
import JSNinja from 'images/js_ninja.png';
import placeholder from 'images/placeimg.jpg';

type TProps = {
  onClick?: () => void
};

function ImageExample({ onClick }: TProps): React$Element<*> {
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
      <div className="row">
        <div className="col">
          <p>
            Image&nbsp;
            <code>
              circle height={45} width={45}
            </code>
            :
          </p>
          <Image src={placeholder} alt="test" circle height={45} width={45} />
        </div>
        <div className="col">
          <p>
            Image <code>rounded sm</code>:
          </p>
          <Image src={placeholder} alt="test" rounded sm />
        </div>
        <div className="col">
          <p>
            Image <code>crisp md</code>:
          </p>
          <Image src={placeholder} alt="test" crisp md />
        </div>
        <div className="row">
          <div className="col">
            <p>
              Image <code>default lg</code>:
            </p>
            <Image src={placeholder} alt="test" lg />
          </div>
          <div className="col">
            <p>
              Image <code>rounded responsive onClick</code>:
            </p>
            <Image
              className="onClick-test"
              src={placeholder}
              alt="test"
              rounded
              responsive
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageExample;
