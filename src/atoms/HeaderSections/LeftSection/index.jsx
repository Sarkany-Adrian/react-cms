// @flow
import React from 'react';
import Logo from 'atoms/Logo';
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
        <Logo text="Logo" className="left-section__logo__item" />
      </div>
      <div className="left-section__menu">
        <button
          type="button"
          className="left-section__menu__button"
          onClick={onClickMenu}
        >
          M
        </button>
        <button
          type="button"
          className="left-section__menu__button d-none d-sm-inline"
          onClick={onClickProfile}
        >
          P
        </button>
      </div>
    </div>
  );
}

export default LeftSection;
