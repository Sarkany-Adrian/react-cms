import React from 'react';
import { shallow } from 'enzyme';
import Image from 'atoms/Image';

describe('Image atom', () => {
  it('Should render the image', () => {
    const wrapper = shallow(<Image src="lorem/ipsum.png" alt="image" />);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
  });

  it('Should invoke the onError method', () => {
    const wrapper = shallow(<Image src="" errorImage="test_error.png" />);
    expect(wrapper.state().src).toBe('');
    wrapper.simulate('error');
    expect(wrapper.state().src).toBe('test_error.png');
  });
});
