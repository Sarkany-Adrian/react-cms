import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'components/Modal';

const TestComponent = () => <div>test</div>;
const mockedModal = {
  component: TestComponent,
  close: jest.fn()
};

/**
 *
 */
test('Should render Modal component with class "app-modal--show"', () => {
  const wrapper = shallow(<Modal modal={mockedModal} />);
  expect(wrapper.find('.app-modal--show').exists()).toBe(true);
});

/**
 *
 */
test('Should render Modal component with class "app-modal--hide"', () => {
  const wrapper = shallow(<Modal modal={{}} />);
  expect(wrapper.find('.app-modal--hide').exists()).toBe(true);
});
