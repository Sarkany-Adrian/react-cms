// @flow
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import onClickOutside from 'react-onclickoutside';
// constants
import sidebarLinks from 'constants/sidebarLinks';
// theme
import { ThemeProvider } from 'styled-components';
import { SiteThemeContext } from 'contexts/theme';
// components
import Button from 'atoms/Button';
// types
import type { SidebarLink } from 'declarations/sidebar';
// fa
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// style
import './style.scss';
import { StyledSidebar, StyledSidebarHeader, StyledMenuItem } from './style';

type Props = {
  isOpen: boolean,
  toggleSidebar: boolean => void
};

export class Sidebar extends PureComponent<Props> {
  handleClickOutside = () => {
    const { toggleSidebar } = this.props;
    toggleSidebar(false);
  };

  render() {
    const { isOpen } = this.props;

    return (
      <SiteThemeContext.Consumer>
        {(props: any) => (
          <ThemeProvider theme={props.theme}>
            <StyledSidebar
              className={cx(
                isOpen ? 'app-sidebar--open' : 'app-sidebar--closed'
              )}
            >
              <StyledSidebarHeader>
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
              </StyledSidebarHeader>

              <ul className="app-sidebar__item-list">
                {sidebarLinks.map((link: SidebarLink) => (
                  <StyledMenuItem key={link.id}>
                    <Link to={link.path}>{link.displayName}</Link>
                  </StyledMenuItem>
                ))}
              </ul>
            </StyledSidebar>
          </ThemeProvider>
        )}
      </SiteThemeContext.Consumer>
    );
  }
}

export default onClickOutside(Sidebar);
