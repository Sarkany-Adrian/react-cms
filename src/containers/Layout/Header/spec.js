import React from 'react';
import { shallow } from 'enzyme';

import Header from 'containers/Layout/Header';

describe('App Header', () => {
  it('should render the app header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.equals(<div className="app-header">header</div>)).toBe(true);
  });
});
