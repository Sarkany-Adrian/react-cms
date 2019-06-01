import React from 'react';
import { shallow } from 'enzyme';

// components
import Footer from 'containers/Layout/Footer';

/**
 *
 */
test('Should render the footer with 1 column in 2 rows.', () => {
  const wrapper = shallow(
    <Footer rows={2}>
      <div className="first">First Column</div>
      <div className="second">Second Column</div>
    </Footer>
  );
  expect(wrapper.find('.first').exists()).toBe(true);
  expect(wrapper.find('.second').exists()).toBe(true);
  expect(wrapper.find('.app-footer__row').length).toBe(2);
});
