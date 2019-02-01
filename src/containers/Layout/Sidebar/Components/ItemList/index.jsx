// @flow
import React from 'react';
import type { SidebarLink } from 'declarations/sidebar';
import { Link } from 'react-router-dom';
import { StyledMenuItem } from 'containers/Layout/Sidebar/style';
import sidebarLinks from 'constants/sidebarLinks';

function ItemList(): React$Element<'ul'> {
  return (
    <ul className="app-sidebar__item-list">
      {sidebarLinks.map((link: SidebarLink) => (
        <StyledMenuItem key={link.id}>
          <Link to={link.path}>{link.displayName}</Link>
        </StyledMenuItem>
      ))}
    </ul>
  );
}
export default ItemList;
