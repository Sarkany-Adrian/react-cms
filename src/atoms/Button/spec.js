import React from 'react';
import { shallow } from 'enzyme';

import Button from 'atoms/Button';

const handleClick = jest.fn();

describe('button', () => {
  it('should render the button', () => {
    const wrapper = shallow(<Button handleClick={handleClick}>Test</Button>);
    expect(
      wrapper.equals(
        <button type="button" onClick={handleClick}>
          Test
        </button>
      )
    ).toBe(true);
  });
});
