// @flow
import React from 'react';
import { observer, inject } from 'mobx-react';
import ConnectedModal from 'components/Modal/ModalContainer';
import type { ModalInterface } from 'declarations/modal';
import Portal from 'atoms/Portal';
import cx from 'classnames';

type TProps = {
  modal: ModalInterface
};

export const Modal = ({ modal }: TProps): React$Element<*> => {
  const body = document.getElementsByTagName('body')[0];
  body.style.overflow = modal && modal.component ? 'hidden' : 'auto';

  return (
    <Portal shouldCreatePortal={!!modal.component} parentElement={body}>
      <div
        className={cx(
          'app-modal',
          !modal.component ? 'app-modal--hide' : 'app-modal--show'
        )}
      >
        <ConnectedModal
          modal={modal}
          disableOnClickOutside={!modal.component}
        />
      </div>
    </Portal>
  );
};

export default inject('modal')(observer(Modal));
