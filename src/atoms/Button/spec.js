import React from 'react';
import { shallow, mount } from 'enzyme';
import siteTheme from 'themes/siteTheme';

import Button from 'atoms/Button';

describe('Button atom', () => {
  const context = {
    theme: siteTheme.theme1
  };
  it('Should render the button with the props from the context', () => {
    const outer = shallow(<Button className="test-button">Test</Button>);
    const Children = outer.props().children(context);
    const wrapper = mount(Children);
    expect(wrapper.prop('theme')).toEqual(context.theme);
    expect(wrapper.find('.test-button').exists()).toBe(true);
  });
});
