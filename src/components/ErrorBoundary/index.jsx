// @flow
import * as React from 'react';

type FallbackComponentProps = {
  error: Error,
  info: Object
};

type ErrorBoundaryProps = {
  children: React.Node,
  FallbackComponent: React.ComponentType<FallbackComponentProps>,
  onError: ?(error: Error, info: Object) => void
};

type ErrorBoundaryState = {
  error: ?Error,
  info: ?Object
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, info: null };
  }

  componentDidCatch(error: Error, info: Object) {
    const { onError } = this.props;
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      info
    });

    // Callback for error messages
    if (onError) {
      onError(error, info);
    }
  }

  render() {
    const { FallbackComponent, children } = this.props;
    const { error, info } = this.state;

    if (error && info) {
      // If an error occurs, render the error component
      return <FallbackComponent error={error} info={info} />;
      // return React.createElement(fallbackComponent, { error, info });
    }

    // Or just render children
    return children;
  }
}

export default ErrorBoundary;
