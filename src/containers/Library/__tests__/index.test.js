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
test('should render the Library container', () => {
  const wrapper = shallow(<Library modal={modal} />);

  expect(wrapper.find('.container').exists()).toEqual(true);
});

/**
 *
 */
test('should invoke toggleVisibility() prop by clicking on the button', () => {
  const wrapper = shallow(<Library modal={modal} />);
  const button = wrapper.find(Button);

  expect(button.exists()).toBe(true);

  button.simulate('click');

  expect(modal.toggleVisibility).toHaveBeenCalled();
});
