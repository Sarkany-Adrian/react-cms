import React from 'react';
import { shallow } from 'enzyme';
import { Library } from 'containers/Library';
import Button from 'atoms/Button';

describe('Library container', () => {
  it('Should render the Library container and invoke toggleVisibility method', () => {
    const mockedModal = {
      toggleVisibility: jest.fn()
    };
    const wrapper = shallow(<Library modal={mockedModal} />);
    const button = wrapper.find(Button);
    expect(button.exists()).toBe(true);
    button.simulate('click');
    expect(mockedModal.toggleVisibility).toHaveBeenCalled();
  });
});
