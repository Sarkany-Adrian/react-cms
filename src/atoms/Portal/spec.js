import { shallow } from 'enzyme';
import React from 'react';
import Portal from 'atoms/Portal';

describe('Portal atom', () => {
  it('Should render children in the parent element.', () => {
    const props = {
      parentElement: document.createElement('div'),
      shouldCreatePortal: true
    };
    const wrapper = shallow(
      <Portal {...props}>
        <div className="test">test</div>
      </Portal>
    );
    expect(wrapper.find('.test').exists()).toBe(true);
  });

  it('Should not render children in the parent element.', () => {
    const props = {
      parentElement: document.createElement('div'),
      shouldCreatePortal: false
    };
    const wrapper = shallow(
      <Portal {...props}>
        <div className="test">test</div>
      </Portal>
    );
    expect(wrapper.find('.test').exists()).toBe(false);
  });
});
