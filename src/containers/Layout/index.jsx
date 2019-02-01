// @flow
import React, { Component } from 'react';
import type { ComponentType } from 'react';
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

  HOCtoggleSidebar = (isOpen: boolean) => {
    this.setState({ isSidebarOpen: isOpen });
  };

  HOCtoggleOffsidebar = (isOpen: boolean) => {
    this.setState({ isOffsidebarOpen: isOpen });
  };

  toggleSidebar = () => {
    this.setState((state: State) => ({
      isSidebarOpen: !state.isSidebarOpen
    }));
  };

  toggleOffsidebar = () => {
    this.setState((state: State) => ({
      isOffsidebarOpen: !state.isOffsidebarOpen
    }));
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
          HOCtoggleSidebar={this.HOCtoggleSidebar}
          disableOnClickOutside={!isSidebarOpen}
          outsideClickIgnoreClass="ignorethis"
        />
        <ConnectedOffsidebar
          isOpen={isOffsidebarOpen}
          toggleOffsidebar={this.toggleOffsidebar}
          HOCtoggleOffsidebar={this.HOCtoggleOffsidebar}
          disableOnClickOutside={!isOffsidebarOpen}
          outsideClickIgnoreClass="ignorethis"
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
                // onClickProfile={this.toggleSidebar}
              />
            }
            right={
              <RightSection
                // onClickSettings={this.toggleOffsidebar}
                onClickProfile={this.toggleOffsidebar}
              />
            }
          />
          <div className="app-content">
            <Route {...rest} component={Comp} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
