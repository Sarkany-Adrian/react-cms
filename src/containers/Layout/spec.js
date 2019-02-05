import React from 'react';
import { shallow } from 'enzyme';

import Layout from 'containers/Layout';

describe('Layout container', () => {
  it('should trigger the toggle sidebar method', () => {
    const wrapper = shallow(<Layout.wrappedComponent />);
    wrapper.instance().toggleSidebar(true);
    expect(wrapper.instance().state.isSidebarOpen).toEqual(true);
  });

  it('should be able to toggle the sidebar with onclickoutside method', () => {
    const wrapper = shallow(<Layout.wrappedComponent />);
    wrapper.instance().HOCtoggleSidebar(true);
    expect(wrapper.instance().state.isSidebarOpen).toBe(true);
  });

  it('should be able to toggle the offsidebar method', () => {
    const wrapper = shallow(<Layout.wrappedComponent />);
    wrapper.instance().toggleOffsidebar(true);
    expect(wrapper.instance().state.isOffsidebarOpen).toBe(true);
  });

  it('should be able to toggle the offsidebar with onclickoutside method', () => {
    const wrapper = shallow(<Layout.wrappedComponent />);
    wrapper.instance().HOCtoggleOffsidebar(true);
    expect(wrapper.instance().state.isOffsidebarOpen).toBe(true);
  });
});
