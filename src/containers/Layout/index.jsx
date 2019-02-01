// @flow
import React, { Component } from 'react';
import type { ComponentType, Element } from 'react';
import { Route, withRouter } from 'react-router-dom';
import cx from 'classnames';
// components
import Header from 'containers/Layout/Header';
import Footer from 'containers/Layout/Footer';
import ConnectedSidebar from 'containers/Layout/Sidebar';
import ConnectedOffsidebar from 'containers/Layout/Offsidebar';
import LeftSection from 'atoms/HeaderSections/LeftSection';
import RightSection from 'atoms/HeaderSections/RightSection';
import ConnectedModal from 'components/Modal';
// mobx
import { observer, inject } from 'mobx-react';
// style
import './style.scss';

type Props = {
  component: ComponentType<*>,
  path: string,
  exact: ?boolean,
  auth: Object,
  location: Object
};

type State = {
  isSidebarOpen: boolean,
  isOffsidebarOpen: boolean
};

@inject(['auth'])
@observer
class Layout extends Component<Props, State> {
  state = {
    isSidebarOpen: false,
    isOffsidebarOpen: false
  };

  toggleSidebar = (isOpen: boolean) => {
    this.setState({ isSidebarOpen: isOpen });
  };

  toggleOffsidebar = (isOpen: boolean) => {
    this.setState({ isOffsidebarOpen: isOpen });
  };

  render() {
    const { component: Comp, auth, location, ...rest } = this.props;
    const { isSidebarOpen, isOffsidebarOpen } = this.state;

    return (
      <div className="app-wrapper">
        <ConnectedModal />
        <ConnectedSidebar
          isOpen={isSidebarOpen}
          toggleSidebar={this.toggleSidebar}
          disableOnClickOutside={!isSidebarOpen}
        />
        <ConnectedOffsidebar
          isOpen={isOffsidebarOpen}
          toggleOffsidebar={this.toggleOffsidebar}
          disableOnClickOutside={!isOffsidebarOpen}
        />
        <div
          className={cx(
            'app-content',
            isSidebarOpen
              ? 'app-content--sidebar-open'
              : 'app-content--sidebar-closed'
          )}
        >
          <Header
            left={
              <LeftSection
                onClickMenu={this.toggleSidebar}
                onClickProfile={this.toggleSidebar}
              />
            }
            right={
              <RightSection
                onClickSettings={this.toggleOffsidebar}
                onClickProfile={this.toggleSidebar}
              />
            }
          />
          <div className="app-content">
            <Route
              {...rest}
              render={(matchProps: Props): ComponentType<*> | Element<*> => (
                // auth.isLoggedIn ? (
                //   <Comp {...matchProps} />
                // ) : (
                //   <Redirect
                //     to={{
                //       pathname: '/login',
                //       state: { from: location }
                //     }}
                //   />
                // )

                <Comp {...matchProps} />
              )}
            />
          </div>
          <Footer>
            <div>Logo</div>
            <div>
              <ul>
                <li>Discover</li>
                <li>Contact</li>
                <li>About us</li>
              </ul>
            </div>
          </Footer>
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
