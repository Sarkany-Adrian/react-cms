import React from 'react';
import { shallow } from 'enzyme';

// components
import { ModalContainer } from 'components/Modal/ModalContainer';

// mocks
const TestComponent = () => <div>test</div>;
const mockedModal = {
  component: TestComponent,
  close: jest.fn()
};

/**
 *
 */
test('Should render ModalContainer', () => {
  const wrapper = shallow(<ModalContainer modal={mockedModal} />);
  expect(wrapper.find('.app-modal__container').exists()).toBe(true);
});

/**
 *
 */
test('Should invoke modal.close() in handleClickOutside method', () => {
  const wrapper = shallow(<ModalContainer modal={mockedModal} />);
  wrapper.instance().handleClickOutside();
  expect(mockedModal.close).toHaveBeenCalled();
});
