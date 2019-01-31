// @flow
import React from 'react';
// atoms
import Button from 'atoms/Button';
import ThemeSelect from 'atoms/ThemeSelect';

// styles
import 'atoms/HeaderSections/RightSection/style.scss';

type TProps = {
  onClickProfile: (isOpen: boolean) => void
};

function RightSection({ onClickProfile }: TProps): React$Element<'div'> {
  return (
    <div className="right-section d-flex align-items-center">
      <Button
        className="right-section__profile__button"
        onClick={onClickProfile}
        primary
      >
        Profile
      </Button>
      <ThemeSelect />
    </div>
  );
}

export default RightSection;
