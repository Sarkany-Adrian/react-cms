import React from 'react';
import { shallow, mount } from 'enzyme';

// components
import { Sidebar } from 'containers/Layout/Sidebar';
import {
  StyledSidebar,
  StyledSidebarHeader,
  StyledMenuItem
} from 'containers/Layout/Sidebar/style';

// mocks
const theme = {
  font: {
    fontBody: 'test'
  },
  colors: {
    primary: 'red'
  },
  baseColors: {
    lightBlue: 'blue'
  }
};

/**
 *
 */
describe('App Sidebar', () => {
  const props = {
    isOpen: true,
    HOCtoggleSidebar: jest.fn()
  };

  /**
   *
   */
  test('should call toggleSidebar', () => {
    const wrapper = shallow(<Sidebar {...props} />);

    wrapper.instance().handleClickOutside();

    expect(props.HOCtoggleSidebar).toHaveBeenCalledTimes(1);
  });
});

/**
 *
 */
describe('Styled components', () => {
  /**
   *
   */
  test('Should render StyledSidebar', () => {
    const wrapper = mount(<StyledSidebar theme={theme} />);

    expect(wrapper.find('aside').exists()).toBe(true);
  });

  /**
   *
   */
  test('Should render StyledSidebarHeader', () => {
    const wrapper = mount(<StyledSidebarHeader theme={theme} />);

    expect(wrapper.find('div').exists()).toBe(true);
  });

  /**
   *
   */
  test('Should render StyledMenuItem', () => {
    const wrapper = mount(<StyledMenuItem theme={theme} />);

    expect(wrapper.find('li').exists()).toBe(true);
  });
});
