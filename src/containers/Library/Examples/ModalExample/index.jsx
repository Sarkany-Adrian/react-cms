// @flow
import React from 'react';
import Button from 'atoms/Button';

type TProps = {
  toggleVisibility: () => void
};

function ModalExample({ toggleVisibility }: TProps): React$Element<'div'> {
  return (
    <div className="container">
      <div className="row">
        <div className="col py-3 px-md-5">
          <h3>Modal Header</h3>
        </div>
        <div className="col py-3 px-md-5">
          <Button className="close" onClick={toggleVisibility}>
            <span aria-hidden="true">&times;</span>
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col">Modal Content Left</div>
        <div className="col">Modal Content Right</div>
      </div>
    </div>
  );
}

export default ModalExample;
