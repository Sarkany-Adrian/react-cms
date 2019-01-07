// @flow
import React, { Component } from 'react';
import type { ComponentType, Element } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
// components
import Header from 'containers/Layout/Header';
import Footer from 'containers/Layout/Footer';
import Sidebar from 'containers/Layout/Sidebar';
// mobx
import { observer, inject } from 'mobx-react';
// style
import './style.scss';

type Props = {
  component: ComponentType<*>,
  path: string,
  exact: ?boolean,
  auth: Object
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

  toggleSidebar = () => {
    this.setState((state: State) => ({
      ...state,
      isSidebarOpen: !state.isSidebarOpen
    }));
  };

  render() {
    const { component: Comp, auth, ...rest } = this.props;
    const { isSidebarOpen } = this.state;

    return (
      <div className="app-wrapper">
        <Header toggleSidebar={this.toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={this.toggleSidebar} />
        <div className="app-content">
          <Route
            {...rest}
            render={(matchProps: Props): ComponentType<*> | Element<*> =>
              auth.isLoggedIn ? (
                <Comp {...matchProps} />
              ) : (
                <Redirect
                  to={{
                    pathname: '/login'
                    // state: { from: this.props.location }
                  }}
                />
              )
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
