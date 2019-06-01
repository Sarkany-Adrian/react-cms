import React from 'react';
import { shallow } from 'enzyme';

// components
import Image from 'atoms/Image';

/**
 *
 */
test('Should render the image', () => {
  const wrapper = shallow(<Image src="lorem/ipsum.png" alt="image" />);
  const img = wrapper.find('img');
  expect(img.exists()).toBe(true);
});

/**
 *
 */
test('Should invoke the onError method', () => {
  const wrapper = shallow(<Image src="" errorImage="test_error.png" />);
  expect(wrapper.state().src).toBe('');
  wrapper.simulate('error');
  expect(wrapper.state().src).toBe('test_error.png');
});
