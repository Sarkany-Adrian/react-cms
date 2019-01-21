import React from 'react';
import { shallow } from 'enzyme';
import RightSection from 'atoms/HeaderSections/RightSection';

describe('RightSection atom', () => {
  it('Should render the RightSection Atom', () => {
    const wrapper = shallow(<RightSection />);
    expect(wrapper.find('.right-section__profile__button').exists()).toBe(true);
  });

  it('Should invoke onClickProfile method', () => {
    const onClickProfile = jest.fn();
    const wrapper = shallow(<RightSection onClickProfile={onClickProfile} />);
    wrapper.find('.right-section__profile__button').simulate('click');
    expect(onClickProfile).toHaveBeenCalled();
  });

  it('Should invoke onClickSettings method', () => {
    const onClickSettings = jest.fn();
    const wrapper = shallow(<RightSection onClickSettings={onClickSettings} />);
    wrapper.find('.right-section__settings__button').simulate('click');
    expect(onClickSettings).toHaveBeenCalled();
  });
});
