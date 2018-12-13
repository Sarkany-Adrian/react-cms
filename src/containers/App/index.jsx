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
// Not found
import NotFound from 'containers/NotFound';

function App(): React$Element<*> {
  return (
    <ErrorBoundary onError={() => undefined} fallbackComponent={AppError}>
      <Switch>
        <Layout exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Layout path="*" component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

export default App;
