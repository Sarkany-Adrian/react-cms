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

type Props = {
  onClickMenu: (isOpen: boolean) => void,
  onClickProfile: (isOpen: boolean) => void
};

function LeftSection({
  onClickMenu,
  onClickProfile
}: Props): React$Element<'div'> {
  return (
    <div className="left-section d-flex align-items-center">
      <div className="left-section__logo">
        <Logo src={logoImg} className="left-section__logo__item" />
      </div>
      <div className="left-section__menu">
        <Button className="left-section__menu__button" onClick={onClickMenu}>
          <FontAwesomeIcon
            icon={faBars}
            // className="app-sidebar__header__close__icon"
          />
        </Button>
      </div>
    </div>
  );
}

export default LeftSection;
