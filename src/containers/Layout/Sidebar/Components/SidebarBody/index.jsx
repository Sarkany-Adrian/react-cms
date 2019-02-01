// @flow
import React from 'react';
import Button from 'atoms/Button';
import cx from 'classnames';
// components
import ItemList from 'containers/Layout/Sidebar/Components/ItemList';
import {
  StyledSidebar,
  StyledSidebarHeader
} from 'containers/Layout/Sidebar/style';
// fa
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type TProps = {
  isOpen: boolean,
  onClick: () => void
};

function SidebarBody({ isOpen, onClick }: TProps) {
  return (
    <StyledSidebar
      className={cx(isOpen ? 'app-sidebar--open' : 'app-sidebar--closed')}
    >
      <StyledSidebarHeader>
        Menu
        <Button className="app-sidebar__header__close" onClick={onClick}>
          <FontAwesomeIcon
            icon={faTimes}
            className="app-sidebar__header__close__icon ignorethis"
          />
        </Button>
      </StyledSidebarHeader>
      <ItemList />
    </StyledSidebar>
  );
}

export default SidebarBody;
