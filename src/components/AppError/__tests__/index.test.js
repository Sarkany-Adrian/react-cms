import React from 'react';
import { shallow } from 'enzyme';

import AppError from 'components/AppError';

/**
 *
 */
test('should render the error component', () => {
  const wrapper = shallow(<AppError />);
  expect(
    wrapper.equals(<div>Something went wrong, please try again later.</div>)
  );
});
