import React from 'react';
import { shallow, mount } from 'enzyme';
import { Sidebar } from 'containers/Layout/Sidebar';
import {
  StyledSidebar,
  StyledSidebarHeader,
  StyledMenuItem
} from 'containers/Layout/Sidebar/style';

describe('App Sidebar', () => {
  const mockedProps = {
    isOpen: true,
    toggleSidebar: jest.fn()
  };

  it('should call toggleSidebar', () => {
    const wrapper = shallow(<Sidebar {...mockedProps} />);
    wrapper.instance().handleClickOutside();
    expect(mockedProps.toggleSidebar).toHaveBeenCalledTimes(1);
  });
});

describe('Styled components', () => {
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

  it('Should render StyledSidebar', () => {
    const wrapper = mount(<StyledSidebar theme={theme} />);
    expect(wrapper.find('aside').exists()).toBe(true);
  });

  it('Should render StyledSidebarHeader', () => {
    const wrapper = mount(<StyledSidebarHeader theme={theme} />);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('Should render StyledMenuItem', () => {
    const wrapper = mount(<StyledMenuItem theme={theme} />);
    expect(wrapper.find('li').exists()).toBe(true);
  });
});
