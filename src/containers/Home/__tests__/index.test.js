import React from 'react';
import { shallow } from 'enzyme';

import Home from 'containers/Home';

/**
 *
 */
test('renders the home container', () => {
  const wrapper = shallow(<Home />);
  expect(
    wrapper.equals(
      <div>
        <p>home page</p>
      </div>
    )
  );
});
