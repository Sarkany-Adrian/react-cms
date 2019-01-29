import React from 'react';
import { shallow } from 'enzyme';
import ImageExample from 'containers/Library/Examples/ImageExample';

describe('ImageExample', () => {
  it('Should render the ImageExample component', () => {
    const wrapper = shallow(<ImageExample />);
    expect(wrapper.find('[alt="JSNinja"]').exists()).toBe(true);
  });
});
