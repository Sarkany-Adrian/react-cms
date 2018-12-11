// @flow
import React from 'react';
import { Switch } from 'react-router-dom';

// Layout Wrapper
import Layout from 'containers/Layout';

// Page containers
import Home from 'containers/Home';
// Error boundary
import ErrorBoundary from 'components/ErrorBoundary';
import AppError from 'components/AppError';
// Not found
import NotFound from 'containers/NotFound';

const App = () => (
  <ErrorBoundary fallbackComponent={AppError}>
    <Switch>
      <Layout exact path="/" component={Home} />
      <Layout path="*" component={NotFound} />
    </Switch>
  </ErrorBoundary>
);

export default App;
