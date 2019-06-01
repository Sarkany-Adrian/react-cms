import React from 'react';
import { shallow } from 'enzyme';

// components
import RightSection from 'atoms/HeaderSections/RightSection';

/**
 *
 */
test('Should render the RightSection Atom', () => {
  const wrapper = shallow(<RightSection />);
  expect(wrapper.find('.right-section__profile__button').exists()).toBe(true);
});

/**
 *
 */
test('Should invoke onClickProfile method', () => {
  const onClickProfile = jest.fn();
  const wrapper = shallow(<RightSection onClickProfile={onClickProfile} />);
  wrapper.find('.right-section__profile__button').simulate('click');
  expect(onClickProfile).toHaveBeenCalled();
});
