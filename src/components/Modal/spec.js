import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'components/Modal';
import { ModalContainer } from 'components/Modal/ModalContainer';

const TestComponent = () => <div>test</div>;
const mockedModal = {
  component: TestComponent,
  close: jest.fn()
};

describe('Modal', () => {
  it('Should render Modal component with class "app-modal--show"', () => {
    const wrapper = shallow(<Modal modal={mockedModal} />);
    expect(wrapper.find('.app-modal--show').exists()).toBe(true);
  });
  it('Should render Modal component with class "app-modal--hide"', () => {
    const wrapper = shallow(<Modal modal={{}} />);
    expect(wrapper.find('.app-modal--hide').exists()).toBe(true);
  });
});

describe('ModalContainer', () => {
  it('Should render ModalContainer', () => {
    const wrapper = shallow(<ModalContainer modal={mockedModal} />);
    expect(wrapper.find('.app-modal__container').exists()).toBe(true);
  });

  it('Should invoke modal.close() in handleClickOutside method', () => {
    const wrapper = shallow(<ModalContainer modal={mockedModal} />);
    wrapper.instance().handleClickOutside();
    expect(mockedModal.close).toHaveBeenCalled();
  });
});
