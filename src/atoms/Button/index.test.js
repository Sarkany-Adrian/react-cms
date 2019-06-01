import React from 'react';
import { shallow, mount } from 'enzyme';

// theme
import siteTheme from 'themes/siteTheme';

// components
import Button from 'atoms/Button';
import StyledButton from 'atoms/Button/style';

// mocks
const context = {
  theme: siteTheme.theme1
};

/**
 *
 */
test('Should render the button with the props from the context', () => {
  const outer = shallow(<Button className="test-button">Test</Button>);
  const Children = outer.props().children(context);
  const wrapper = mount(Children);

  expect(wrapper.prop('theme')).toEqual(context.theme);
  expect(wrapper.find('.test-button').exists()).toBe(true);

  wrapper.unmount();
});

/**
 *
 */
test('Should render the StyledButton.', () => {
  const wrapper = mount(<StyledButton theme={context.theme} />);

  expect(wrapper.find('button').exists()).toBe(true);
  expect(wrapper.prop('primary')).toBeFalsy();
  expect(wrapper.prop('danger')).toBeFalsy();
  expect(wrapper.prop('secondary')).toBeFalsy();

  wrapper.unmount();
});

/**
 *
 */
test('Should render the StyledButton as a primary button', () => {
  const wrapper = mount(<StyledButton primary theme={context.theme} />);

  expect(wrapper.prop('primary')).toBe(true);

  wrapper.unmount();
});

/**
 *
 */
test('Should render the StyledButton as a secondary button.', () => {
  const wrapper = mount(<StyledButton secondary theme={context.theme} />);

  expect(wrapper.prop('secondary')).toBe(true);

  wrapper.unmount();
});

/**
 *
 */
test('Should render the StyledButton as a danger button.', () => {
  const wrapper = mount(<StyledButton danger theme={context.theme} />);

  expect(wrapper.prop('danger')).toBe(true);

  wrapper.unmount();
});
