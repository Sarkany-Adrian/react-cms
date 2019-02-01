import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from 'containers/Layout/Header';

describe('Header', () => {
  const context = {
    theme: {}
  };
  it('Should render Header with 3 sections', () => {
    const outer = shallow(<Header left="left" center="center" right="right" />);
    const Children = outer.props().children(context);
    const wrapper = mount(Children);
    expect(wrapper.find('.app-header__left').text()).toBe('left');
    expect(wrapper.find('.app-header__center').text()).toBe('center');
    expect(wrapper.find('.app-header__right').text()).toBe('right');
  });

  it('Center section should not be visible.', () => {
    const outer = shallow(<Header />);
    const Children = outer.props().children(context);
    const wrapper = mount(Children);
    expect(wrapper.find('.app-header__center').hasClass('d-none')).toBe(true);
  });
});
