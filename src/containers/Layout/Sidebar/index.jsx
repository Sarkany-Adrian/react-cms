// @flow
import React, { PureComponent } from 'react';
import onClickOutside from 'react-onclickoutside';
// theme
import { ThemeProvider } from 'styled-components';
import { SiteThemeContext } from 'contexts/theme';
// components
import SidebarBody from 'containers/Layout/Sidebar/Components/SidebarBody';
// style
import './style.scss';

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
            <SidebarBody isOpen={isOpen} onClick={this.handleClickOutside} />
          </ThemeProvider>
        )}
      </SiteThemeContext.Consumer>
    );
  }
}

export default onClickOutside(Sidebar);
