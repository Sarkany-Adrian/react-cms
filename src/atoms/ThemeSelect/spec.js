import React from 'react';
import { shallow, mount } from 'enzyme';
import ThemeSelect from 'atoms/ThemeSelect';

describe('ThemeSelect', () => {
  const context = {
    theme: { name: 'test_theme' },
    handleThemeChange: jest.fn()
  };
  const outer = shallow(<ThemeSelect />);

  it('should render the ThemeSelect atom', () => {
    const Children = outer.props().children(context);
    const wrapper = mount(Children);
    expect(wrapper.prop('theme')).toEqual(context.theme);
    expect(wrapper.find('option').exists()).toBe(true);
  });

  it('should invoke the handleThemeChange method', () => {
    const Children = outer.props().children(context);
    const wrapper = mount(Children);
    const select = wrapper.find('select');
    const event = {
      target: {
        value: 'theme2'
      }
    };
    select.simulate('change', event);
    expect(context.handleThemeChange).toHaveBeenCalled();
  });

  it('should not render the ThemeSelect atom', () => {
    const Children = outer.props().children();
    expect(Children).toBeNull();
  });
});
