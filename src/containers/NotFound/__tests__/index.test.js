import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';

import NotFound from 'containers/NotFound';

test('should render the not found container', () => {
  const wrapper = shallow(<NotFound />);
  expect(
    wrapper.equals(
      <div>
        Sorry, the page you are looking for could not be found.
        <MemoryRouter>
          <Link to="/asdsad">Return to the home page?</Link>
        </MemoryRouter>
      </div>
    )
  );
});
