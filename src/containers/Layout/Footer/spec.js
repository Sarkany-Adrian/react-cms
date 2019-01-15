import React from 'react';
import { shallow } from 'enzyme';

import Footer from 'containers/Layout/Footer';

describe('App Footer', () => {
  it('should render the button', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.equals(<div className="app-footer">...</div>)).toBe(true);
  });
});
