import React from 'react';
import { shallow } from 'enzyme';
import Loader from 'atoms/Loader';

// describe('The loader atom', () => {
//   it('Should render the container, blimps and spinner elements', () => {
//     const wrapper = shallow(<Loader />);
//     const containerDiv = wrapper.children();
//     expect(containerDiv.length).toBe(5)
//   });
// });

describe('The loader atom', () => {
  it('Should render the container, blimps and spinner elements', () => {
    const wrapper = shallow(<Loader />);
    expect(
      wrapper.containsMatchingElement(
        <div className="loader loader__container">
          <div className="loader loader__blimp" />
          <div className="loader loader__blimp" />
          <div className="loader loader__blimp" />
          <div className="loader loader__blimp" />
          <div className="loader loader__ring" />
        </div>
      )
    ).toBe(true);
  });
});
