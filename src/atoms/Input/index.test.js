import React from 'react';
import { shallow } from 'enzyme';

// components
import Input from 'atoms/Input';

// mocks
const mockOnChange = jest.fn();
const event = {
  target: {
    value: 'value'
  }
};

/**
 *
 */
test('Should render an input element.', () => {
  const wrapper = shallow(<Input />);
  expect(wrapper.find('input').exists()).toBe(true);
});

/**
 *
 */
test('Should invoke the onChange method.', () => {
  const wrapper = shallow(<Input onChange={mockOnChange} />);
  wrapper.simulate('change', event);
  expect(mockOnChange).toHaveBeenCalled();
});

/**
 *
 */
test('Should invoke the sanitize and validate method.', () => {
  const mockSanitize = jest.fn();
  const mockValidate = jest.fn();
  const wrapper = shallow(
    <Input
      sanitize={mockSanitize}
      validate={mockValidate}
      onChange={mockOnChange}
    />
  );
  wrapper.simulate('change', event);
  expect(mockSanitize).toHaveBeenCalled();
  expect(mockValidate).toHaveBeenCalled();
});
