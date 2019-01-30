import React from 'react';
import { shallow } from 'enzyme';
import LogoExample from 'containers/Library/Examples/LogoExample';
import Logo from 'atoms/Logo';

describe('LogoExample', () => {
  it('Should render the LogoExample component', () => {
    const wrapper = shallow(<LogoExample />);
    expect(wrapper.find(Logo).exists()).toBe(true);
  });
});
