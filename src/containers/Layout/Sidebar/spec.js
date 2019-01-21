import React from 'react';
import { shallow } from 'enzyme';

import { Sidebar } from 'containers/Layout/Sidebar';

const toggleSidebar = jest.fn();

describe('App Sidebar', () => {
  const defaultProps = {
    isOpen: true,
    toggleSidebar
  };

  // TODO: momentary fix, will come back with a solution for this
  // eslint-disable-next-line flowtype/require-parameter-type
  const renderComponent = (props = defaultProps) =>
    shallow(<Sidebar {...props} />);

  // cleanup before each test
  beforeEach(() => {
    toggleSidebar.mockReset();
  });

  it('when the sidebar is open, renders and matches snapshot', () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it('when the sidebar is closed, renders and matches snapshot', () => {
    const wrapper = renderComponent({ isOpen: false, toggleSidebar });
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleSidebar', () => {
    const wrapper = renderComponent();
    wrapper.instance().handleClickOutside();
    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });
});
