import React from 'react';
import { shallow } from 'enzyme';

import Header from 'containers/Layout/Header';

describe('Header', () => {
  it('Should render Header with 3 sections', () => {
    const wrapper = shallow(
      <Header left="left" center="center" right="right" />
    );
    expect(wrapper.find('.app-header__left').text()).toBe('left');
    expect(wrapper.find('.app-header__center').text()).toBe('center');
    expect(wrapper.find('.app-header__right').text()).toBe('right');
  });

  it('Center section should not be visible on mobile.', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.app-header__center').hasClass('d-none')).toBe(true);
  });
});
