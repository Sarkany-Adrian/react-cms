// @flow
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
// constants
import sidebarLinks from 'constants/sidebarLinks';
// types
import type { SidebarLink } from 'declarations/sidebar';
// style
import './style.scss';

class Sidebar extends PureComponent<*> {
  render() {
    return (
      <aside className="app-sidebar">
        <div>user block</div>
        <ul>
          {sidebarLinks.map((link: SidebarLink) => (
            <li key={link.id}>
              <Link to={link.path}>{link.displayName}</Link>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
