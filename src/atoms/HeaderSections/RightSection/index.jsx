// @flow
import React from 'react';

// Atoms
import Button from 'atoms/Button';
import Image from 'atoms/Image';
import ThemeSelect from 'atoms/ThemeSelect';

// Assets
import JSNinja from 'images/js_ninja.png';

// Styles
import 'atoms/HeaderSections/RightSection/style.scss';

type TProps = {
  onClickProfile: (isOpen: boolean) => void
};

function RightSection({ onClickProfile }: TProps): React$Element<'div'> {
  return (
    <div className="right-section">
      <Button
        className="right-section__profile__button ignore-react-onclickoutside"
        onClick={onClickProfile}
        primary
      >
        <Image src={JSNinja} alt="Profile" height={20} />
      </Button>
      <ThemeSelect />
    </div>
  );
}

export default RightSection;
