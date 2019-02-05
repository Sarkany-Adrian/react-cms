import React from 'react';
import { shallow } from 'enzyme';
import { Offsidebar } from './index';

describe('The offsidebar component', () => {
  const props = {
    isOpen: true,
    toggleOffsidebar: jest.fn(),
    HOCtoggleOffsidebar: jest.fn()
  };

  it('should render the offsidebar container', () => {
    const wrapper = shallow(<Offsidebar {...props} />);
    expect(wrapper.exists('.app-offsidebar--open')).toBe(true);
  });

  it('should call the "toggleOffsidebar" function', () => {
    const wrapper = shallow(<Offsidebar {...props} />);
    wrapper.find('.app-offsidebar__header__close').simulate('click');
    expect(props.toggleOffsidebar).toBeCalledTimes(1);
  });

  it('should call the "HOCtoggleOffsidebar" function', () => {
    const wrapper = shallow(<Offsidebar {...props} />);
    wrapper.instance().handleClickOutside();
    expect(props.HOCtoggleOffsidebar).toBeCalledTimes(1);
  });
});
