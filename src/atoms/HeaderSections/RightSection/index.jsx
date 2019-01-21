// @flow
import React from 'react';
import 'atoms/HeaderSections/RightSection/style.scss';

type Props = {
  onClickSettings: (isOpen: boolean) => void,
  onClickProfile: (isOpen: boolean) => void
};

function RightSection({
  onClickSettings,
  onClickProfile
}: Props): React$Element<'div'> {
  return (
    <div className="right-section d-flex align-items-center">
      <div className="right-section__profile">
        <button
          type="button"
          className="right-section__profile__button d-inline d-sm-none"
          onClick={onClickProfile}
        >
          P
        </button>
      </div>
      <div className="right-section__settings">
        <button
          type="button"
          className="right-section__settings__button"
          onClick={onClickSettings}
        >
          S
        </button>
      </div>
    </div>
  );
}

export default RightSection;
