import React from 'react';
import { mount } from 'enzyme';
import Image from 'atoms/Image';

describe('Image atom', () => {
  it('Should render the image', () => {
    const wrapper = mount(<Image src="lorem/ipsum.png" alt="image" />);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
  });

  it('Should invoke the onError method', () => {
    const wrapper = mount(<Image src="" errorImage="test_error.png" />);
    expect(wrapper.state().src).toBe('');
    wrapper.simulate('error');
    expect(wrapper.state().src).toBe('test_error.png');
  });

  it('Should render the StyledButton with prop rounded', () => {
    const wrapper = mount(<Image src="image.png" alt="image" rounded />);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(wrapper.prop('rounded')).toBe(true);
    expect(wrapper.prop('circle')).toBe(false);
    expect(wrapper.prop('crisp')).toBe(false);
    expect(wrapper.prop('xs')).toBe(false);
    expect(wrapper.prop('sm')).toBe(false);
    expect(wrapper.prop('md')).toBe(false);
    expect(wrapper.prop('lg')).toBe(false);
  });

  it('Should render the StyledButton with prop circle', () => {
    const wrapper = mount(<Image src="image.png" alt="image" circle />);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(wrapper.prop('circle')).toBe(true);
  });

  it('Should render the StyledButton with prop crisp', () => {
    const wrapper = mount(<Image src="image.png" alt="image" crisp />);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
  });

  it('Should render the StyledButton with prop xs', () => {
    const wrapper = mount(<Image src="image.png" alt="image" xs />);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(wrapper.prop('xs')).toBe(true);
  });

  it('Should render the StyledButton with prop sm', () => {
    const wrapper = mount(<Image src="image.png" alt="image" sm />);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(wrapper.prop('sm')).toBe(true);
  });

  it('Should render the StyledButton with prop md', () => {
    const wrapper = mount(<Image src="image.png" alt="image" md />);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(wrapper.prop('md')).toBe(true);
  });

  it('Should render the StyledButton with prop lg', () => {
    const wrapper = mount(<Image src="image.png" alt="image" lg />);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(wrapper.prop('lg')).toBe(true);
  });

  it('Should render the StyledButton with prop responsive', () => {
    const wrapper = mount(<Image src="image.png" alt="image" responsive />);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(wrapper.prop('responsive')).toBe(true);
  });

  it('Should render the StyledButton with onClick method', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <Image src="image.png" alt="image" onClick={onClick} />
    );

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);

    img.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
