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
});
