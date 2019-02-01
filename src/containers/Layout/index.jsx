// @flow
import React, { Component } from 'react';
import type { ComponentType } from 'react';
import { Route, withRouter } from 'react-router-dom';
import cx from 'classnames';
// components
import Header from 'containers/Layout/Header';
import Footer from 'containers/Layout/Footer';
import ConnectedSidebar from 'containers/Layout/Sidebar';
import LeftSection from 'atoms/HeaderSections/LeftSection';
import RightSection from 'atoms/HeaderSections/RightSection';
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
  isSidebarOpen: boolean
};

@inject(['auth'])
@observer
class Layout extends Component<Props, State> {
  state = {
    isSidebarOpen: false
  };

  toggleSidebar = (isOpen: boolean) => {
    this.setState({ isSidebarOpen: isOpen });
  };

  render() {
    const { component: Comp, auth, location, ...rest } = this.props;
    const { isSidebarOpen } = this.state;

    return (
      <div className="app-wrapper">
        <ConnectedSidebar
          isOpen={isSidebarOpen}
          toggleSidebar={this.toggleSidebar}
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
                onClickSettings={this.toggleSidebar}
                onClickProfile={this.toggleSidebar}
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
