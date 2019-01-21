// @flow
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import onClickOutside from 'react-onclickoutside';
// constants
import sidebarLinks from 'constants/sidebarLinks';
// components
import Button from 'atoms/Button';
// types
import type { SidebarLink } from 'declarations/sidebar';
// style
import './style.scss';
// fa
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type Props = {
  isOpen: boolean,
  toggleSidebar: boolean => void
};

export class Sidebar extends PureComponent<Props> {
  // used by on click outside wrapper
  handleClickOutside = () => {
    const { toggleSidebar } = this.props;
    toggleSidebar(false);
  };

  render() {
    const { isOpen } = this.props;
    return (
      <aside
        className={cx(
          'app-sidebar',
          isOpen ? 'app-sidebar--open' : 'app-sidebar--closed'
        )}
      >
        <div className="app-sidebar__header">
          Menu
          <Button
            className="app-sidebar__header__close"
            onClick={this.handleClickOutside}
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="app-sidebar__header__close__icon"
            />
          </Button>
        </div>

        <div className="app-sidebar__user-block">user block</div>

        <div className="app-sidebar__separator" />

        <ul className="app-sidebar__item-list">
          {sidebarLinks.map((link: SidebarLink) => (
            <li key={link.id} className="app-sidebar__item-list__item">
              <Link to={link.path}>{link.displayName}</Link>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

export default onClickOutside(Sidebar);
