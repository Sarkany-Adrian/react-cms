import React from 'react';
import { shallow } from 'enzyme';

import Home from 'containers/Home';

describe('Home container', () => {
  it('should render the error component', () => {
    const wrapper = shallow(<Home />);
    expect(
      wrapper.equals(
        <div>
          <p>home page</p>
        </div>
      )
    );
  });
});
