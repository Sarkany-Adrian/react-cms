// @flow
import * as React from 'react';
// Types
import type { TSize } from 'declarations/loader';
// Components
import Loader from '../Atom';

type Props = {
  isLoading: boolean
};

function WithLoader(size?: TSize = 'large') {
  return function target(WrappedComponent: React.ComponentType<*>) {
    return class extends React.Component<Props> {
      render() {
        const { isLoading } = this.props;
        return (
          (isLoading && <Loader size={size} />) || (
            <WrappedComponent {...this.props} />
          )
        );
      }
    };
  };
}

export default WithLoader;
