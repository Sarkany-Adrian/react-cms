// @flow
import React from 'react';
import type { ComponentType, Element } from 'react';
import { Route, withRouter } from 'react-router-dom';
// components
import Sidebar from 'components/Sidebar';

type Props = {
  component: ComponentType<*>,
  path: string,
  exact: ?boolean
};

function Layout(props: Props) {
  const { component, ...rest } = props;
  const Component = component;
  return (
    <div className="site-wrapper">
      <Sidebar />
      <Route
        {...rest}
        render={(matchProps: Props): ComponentType<*> | Element<*> => (
          <Component {...matchProps} />
        )}
      />
    </div>
  );
}

export default withRouter(Layout);
