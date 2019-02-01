import React from 'react';
import { shallow, mount } from 'enzyme';
import InputExample from 'containers/Library/Examples/InputExample';
import Input from 'atoms/Input';

describe('InputExample', () => {
  it('Should render the InputExample component', () => {
    const wrapper = shallow(<InputExample />);
    expect(wrapper.find(Input).exists()).toBe(true);
  });

  it('Should invoke the onChange, validate and sanitize methods.', () => {
    const wrapper = mount(<InputExample />);
    const input = wrapper.find(Input);
    const event = {
      target: {
        value: 'testing&$%'
      }
    };
    input.simulate('change', event);
    expect(wrapper.state('value')).toBe('testing');
    expect(wrapper.state('error')).toBeTruthy();
  });

  it('Should set error state.', () => {
    const wrapper = mount(<InputExample />);
    const input = wrapper.find(Input);
    const event = {
      target: {
        value: 'test'
      }
    };
    input.simulate('change', event);
    expect(wrapper.state('error')).toBeFalsy();
  });
});
