import React from 'react';
import { shallow } from 'enzyme';
import ModalExample from 'containers/Library/Examples/ModalExample';

describe('ModalExample', () => {
  it('Should render the ModalExample component and invoke the toggleVisibility method', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<ModalExample toggleVisibility={mockFn} />);
    const button = wrapper.find('.close');
    expect(button.exists()).toBe(true);
    button.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
