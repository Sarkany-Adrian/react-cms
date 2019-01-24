// @flow
import React, { Component, cloneElement } from 'react';
import onClickOutside from 'react-onclickoutside';
import { Modal as ModalInterface } from 'declarations/modal';
import 'components/Modal/style.scss';

type Props = {
  modal: ModalInterface
};

export class ModalContainer extends Component<Props> {
  // used by on click outside wrapper
  handleClickOutside = () => {
    const { modal } = this.props;
    modal.close();
  };

  render() {
    const { modal } = this.props;
    return (
      <div className="app-modal__container">
        <div className="app-modal__container__content">
          {modal &&
            modal.component &&
            cloneElement(modal.component, {
              toggleVisibility: modal.toggleVisibility
            })}
        </div>
      </div>
    );
  }
}

export default onClickOutside(ModalContainer);
