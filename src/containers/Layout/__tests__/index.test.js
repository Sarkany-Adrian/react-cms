import React from 'react';
import { shallow } from 'enzyme';

// components
import Layout from 'containers/Layout';

/**
 *
 */
test('should toggle the sidebar', () => {
  const wrapper = shallow(<Layout.wrappedComponent />);

  wrapper.instance().toggleSidebar(true);

  expect(wrapper.instance().state.isSidebarOpen).toEqual(true);
});

/**
 *
 */
test('should trigger the offsidebar', () => {
  const wrapper = shallow(<Layout.wrappedComponent />);

  wrapper.instance().toggleOffsidebar(true);

  expect(wrapper.instance().state.isOffsidebarOpen).toBe(true);
});

/**
 *
 */
test('should be able to toggle the sidebar with onclickoutside method', () => {
  const wrapper = shallow(<Layout.wrappedComponent />);

  wrapper.instance().HOCtoggleSidebar(true);

  expect(wrapper.instance().state.isSidebarOpen).toBe(true);
});

/**
 *
 */
test('should be able to toggle the offsidebar method', () => {
  const wrapper = shallow(<Layout.wrappedComponent />);

  wrapper.instance().toggleOffsidebar(true);

  expect(wrapper.instance().state.isOffsidebarOpen).toBe(true);
});

/**
 *
 */
test('should be able to toggle the offsidebar with the onclickoutside method', () => {
  const wrapper = shallow(<Layout.wrappedComponent />);

  wrapper.instance().HOCtoggleOffsidebar(true);

  expect(wrapper.instance().state.isOffsidebarOpen).toBe(true);
});
