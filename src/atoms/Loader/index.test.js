import React from 'react';
import { shallow } from 'enzyme';
import cx from 'classnames';

// components
import Loader from 'atoms/Loader';

/**
 *
 */
test('Should render the container, blimps and spinner elements', () => {
  const wrapper = shallow(<Loader />);
  expect(
    wrapper.containsMatchingElement(
      <div className="loader loader__wrapper">
        <div
          className={cx('loader loader__container', `loader__container--small`)}
        >
          <div className="loader loader__blimp" />
          <div className="loader loader__blimp" />
          <div className="loader loader__blimp" />
          <div className="loader loader__blimp" />
          <div className="loader loader__ring" />
        </div>
      </div>
    )
  ).toBe(true);
});
