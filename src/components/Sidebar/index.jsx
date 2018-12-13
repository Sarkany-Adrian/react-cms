// @flow
import React from 'react';
import { Link } from 'react-router-dom';
// style
import './style.scss';
// constants
import sidebarLinks from 'constants/sidebarLinks';
// types
import type { SidebarLink } from 'declarations/sidebar';
// material components
import Drawer from '@material-ui/core/Drawer';

function Sidebar(): React$Element<*> {
  return (
    <Drawer docked={false} open={false}>
      <div>user block</div>
      <ul>
        {sidebarLinks.map((link: SidebarLink) => (
          <li key={link.id}>
            <Link to={link.path}>{link.displayName}</Link>
          </li>
        ))}
      </ul>
    </Drawer>
  );
}

export default Sidebar;
