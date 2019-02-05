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

  // it('Should have an onClick method', () => {
  //   const wrapper = shallow(<Library />);
  //   wrapper
  //     .find('img')
  //     .at(6)
  //     .simulate('click');
  //   expect(wrapper.instance().onClick).toHaveBeenCalled();
  // });
});
