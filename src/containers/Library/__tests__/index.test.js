import React from 'react';
import { shallow } from 'enzyme';

// components
import { Library } from 'containers/Library';
import Button from 'atoms/Button';

// mocks
const modal = {
  toggleVisibility: jest.fn()
};

/**
 *
 */
test('Should render the Library container and invoke toggleVisibility method', () => {
  const wrapper = shallow(<Library modal={modal} />);
  const button = wrapper.find(Button);

  expect(button.exists()).toBe(true);
  button.simulate('click');

  expect(modal.toggleVisibility).toHaveBeenCalled();
});
