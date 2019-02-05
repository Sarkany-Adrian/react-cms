// @flow
import React from 'react';
import Logo from 'atoms/Logo';
import Button from 'atoms/Button';
// fa
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// assets
import logoImg from 'images/logo_placeholder.png';
// styles
import 'atoms/HeaderSections/LeftSection/style.scss';

type TProps = {
  onClickMenu: (isOpen: boolean) => void
};

function LeftSection({ onClickMenu }: TProps): React$Element<'div'> {
  return (
    <div className="left-section">
      <div className="left-section__logo">
        <Logo src={logoImg} className="left-section__logo__item" />
      </div>
      <div className="left-section__menu">
        <Button
          className="left-section__menu__button ignore-react-onclickoutside"
          onClick={onClickMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </div>
    </div>
  );
}

export default LeftSection;
