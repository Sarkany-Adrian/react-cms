import React from 'react';
import { shallow } from 'enzyme';
import LeftSection from 'atoms/HeaderSections/LeftSection';

describe('LeftSection atom', () => {
  it('Should render LeftSection atom', () => {
    const wrapper = shallow(<LeftSection />);
    expect(wrapper.find('.left-section__logo').exists()).toBe(true);
  });

  it('Should invoke onClickMenu on button click', () => {
    const onClickMenu = jest.fn();
    const wrapper = shallow(<LeftSection onClickMenu={onClickMenu} />);
    wrapper
      .find('.left-section__menu__button')
      .first()
      .simulate('click');
    expect(onClickMenu).toHaveBeenCalled();
  });
});
