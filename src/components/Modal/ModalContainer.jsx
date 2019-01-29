// @flow
import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import type { ModalInterface } from 'declarations/modal';
import 'components/Modal/style.scss';

type TProps = {
  modal: ModalInterface
};

export class ModalContainer extends Component<TProps> {
  // used by on click outside wrapper
  handleClickOutside = () => {
    const { modal } = this.props;
    modal.close();
  };

  render() {
    const { modal } = this.props;
    const { component: ModalComponent, toggleVisibility } = modal;
    return (
      <div className="app-modal__container">
        <div className="app-modal__container__content">
          {ModalComponent && (
            <ModalComponent toggleVisibility={toggleVisibility} />
          )}
        </div>
      </div>
    );
  }
}

export default onClickOutside(ModalContainer);
