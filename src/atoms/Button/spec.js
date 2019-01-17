import React from 'react';
import { shallow } from 'enzyme';

import Button from 'atoms/Button';

const onClick = jest.fn();

describe('Button atom', () => {
  it('should render the button', () => {
    const wrapper = shallow(<Button onClick={onClick}>Test</Button>);
    expect(
      wrapper.equals(
        <button type="button" onClick={onClick}>
          Test
        </button>
      )
    ).toBe(true);
  });

  it('should call the on click prop', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
