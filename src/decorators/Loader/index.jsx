// @flow
import React from 'react';
import type { ComponentType } from 'react';
// Types
import type { TSize } from 'declarations/loader';
// Components
import Loader from 'atoms/Loader';

type Props = {
  isLoading: boolean
};

function WithLoader(size?: TSize = 'large') {
  return function target(WrappedComponent: ComponentType<*>) {
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
