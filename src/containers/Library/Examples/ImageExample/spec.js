import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ImageExample from 'containers/Library/Examples/ImageExample';

describe('ImageExample', () => {
  it('Should render all ImageExample components', () => {
    const wrapper = shallow(<ImageExample />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('check if image onClick method is called', () => {
    const onClick = jest.fn();
    const wrapper = mount(<ImageExample onClick={onClick} />);
    const clickHandler = wrapper.find('img').at(6);
    clickHandler.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
