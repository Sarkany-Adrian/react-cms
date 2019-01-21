import React from 'react';
import { shallow } from 'enzyme';
import Input from 'atoms/Input';

describe('Input atom', () => {
  it('Should render an input element.', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  const mockOnChange = jest.fn();
  const event = {
    target: {
      value: 'value'
    }
  };

  it('Should invoke the onChange method.', () => {
    const wrapper = shallow(<Input onChange={mockOnChange} />);
    wrapper.simulate('change', event);
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('Should invoke the sanitize and validate method.', () => {
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
});
