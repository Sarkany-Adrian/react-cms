import React from 'react';
import { shallow } from 'enzyme';
import SidebarBody from 'containers/Layout/Sidebar/Components/SidebarBody';

describe('SidebarBody component', () => {
  it('Should render the SidebarBody component', () => {
    const wrapper = shallow(<SidebarBody />);
    expect(wrapper.find('Button').exists()).toBe(true);
  });

  it('Should render the SidebarBody component with app-sidebar--open className', () => {
    const wrapper = shallow(<SidebarBody isOpen />);
    expect(wrapper.find('.app-sidebar--open').exists()).toBe(true);
  });
});
