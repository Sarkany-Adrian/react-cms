// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Layout Wrapper
import Layout from 'containers/Layout';
// Page containers
import Home from 'containers/Home';
import Login from 'containers/Login';
// Error boundary
import ErrorBoundary from 'components/ErrorBoundary';
import AppError from 'components/AppError';
// Not found page
import NotFound from 'containers/NotFound';
// Error page
import Error from 'containers/Error';
// Library page
import ConnectedLibrary from 'containers/Library';
// mobx - use strict
import { configure } from 'mobx';
// enforces a workflow where only actions can modify the state
// similar to redux
configure({
  enforceActions: 'observed'
});

function App(): React$Element<*> {
  return (
    <ErrorBoundary onError={() => undefined} FallbackComponent={AppError}>
      <Switch>
        <Layout exact path="/" component={Home} />
        {/* Error page */}
        <Layout path="/error" component={Error} />
        <Layout path="/library" component={ConnectedLibrary} />
        {/* Login page - separate, as it doesn't share the layout */}
        <Route path="/login" component={Login} />
        {/* 404 */}
        <Layout path="*" component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

export default App;
