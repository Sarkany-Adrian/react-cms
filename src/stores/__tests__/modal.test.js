import React from 'react';

import Modal from 'stores/modal';

// mocks
const TestComponent = () => <div>test</div>;

/**
 *
 */
test('Sould set the components value to be undefined.', () => {
  Modal.close();
  expect(Modal.component).toBeUndefined();
});

/**
 *
 */
test('Sould set the components value to be TestComponent.', () => {
  Modal.open(TestComponent);
  expect(Modal.component).toEqual(TestComponent);
});

/**
 *
 */
test('Sould not set the components value to be TestComponent.', () => {
  Modal.open(<TestComponent />);
  expect(Modal.component).not.toEqual(<TestComponent />);
});

/**
 *
 */
test('Should set the components value to be undefined.', () => {
  Modal.toggleVisibility();
  expect(Modal.component).toBeUndefined();
});

/**
 *
 */
test('Should set the components value to be TestComponent.', () => {
  Modal.toggleVisibility(TestComponent);
  expect(Modal.component).toEqual(TestComponent);
});
