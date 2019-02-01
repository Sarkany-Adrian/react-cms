import Modal from 'stores/modal';
import React from 'react';

describe('Modal store', () => {
  it('Sould set the components value to be undefined.', () => {
    Modal.close();
    expect(Modal.component).toBeUndefined();
  });

  const TestComponent = () => <div>test</div>;

  it('Sould set the components value to be TestComponent.', () => {
    Modal.open(TestComponent);
    expect(Modal.component).toEqual(TestComponent);
  });

  it('Sould not set the components value to be TestComponent.', () => {
    Modal.open(<TestComponent />);
    expect(Modal.component).not.toEqual(<TestComponent />);
  });

  it('Should set the components value to be undefined.', () => {
    Modal.toggleVisibility();
    expect(Modal.component).toBeUndefined();
  });

  it('Should set the components value to be TestComponent.', () => {
    Modal.toggleVisibility(TestComponent);
    expect(Modal.component).toEqual(TestComponent);
  });
});
