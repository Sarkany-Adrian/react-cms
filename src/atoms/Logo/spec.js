import React from 'react';
import { shallow } from 'enzyme';
import Logo from 'atoms/Logo';
import Image from 'atoms/Image';

describe('Logo atom', () => {
  it('Should render a span element.', () => {
    const wrapper = shallow(<Logo text="Logo" />);
    expect(wrapper.find('span').exists()).toBe(true);
  });

  it('Should render an Image atom.', () => {
    const wrapper = shallow(<Logo src="SRC" alt="Logo" />);
    expect(wrapper.find(Image).exists()).toBe(true);
  });
});
