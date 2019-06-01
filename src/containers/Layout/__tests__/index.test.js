import React from 'react';
import { shallow } from 'enzyme';

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
