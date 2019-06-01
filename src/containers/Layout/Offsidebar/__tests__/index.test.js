import React from 'react';
import { shallow } from 'enzyme';

// components
import { Offsidebar } from '../index';

// mocks
const props = {
  isOpen: true,
  toggleOffsidebar: jest.fn()
};

/**
 *
 */
test('should render the offsidebar container', () => {
  const wrapper = shallow(<Offsidebar {...props} />);
  expect(wrapper.exists('.app-offsidebar--open')).toBe(true);
});

/**
 *
 */
test('should call the "toggleOffsidebar" function', () => {
  const wrapper = shallow(<Offsidebar {...props} />);
  wrapper.find('.app-offsidebar__header__close').simulate('click');
  expect(props.toggleOffsidebar).toBeCalledTimes(1);
});
