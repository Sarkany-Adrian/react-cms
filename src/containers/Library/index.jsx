// @flow
import React from 'react';
import { observer, inject } from 'mobx-react';
// components & atoms
import Button from 'atoms/Button';
import ModalExample from 'containers/Library/Examples/ModalExample';
import ImageExample from 'containers/Library/Examples/ImageExample';
import InputExample from 'containers/Library/Examples/InputExample';
import LogoExample from 'containers/Library/Examples/LogoExample';
// declarations
import type { ModalInterface } from 'declarations/modal';

type TProps = {
  modal: ModalInterface
};

export function Library({ modal }: TProps): React$Element<'div'> {
  return (
    <div className="container">
      <ImageExample />
      <hr />
      <InputExample />
      <hr />
      <LogoExample />
      <hr />
      <div className="row">
        <div className="col">
          <h1>Modal Component</h1>
          <Button onClick={() => modal.toggleVisibility(ModalExample)}>
            Open Modal
          </Button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default inject('modal')(observer(Library));
