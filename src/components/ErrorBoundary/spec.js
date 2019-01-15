import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from 'components/ErrorBoundary';
import AppError from 'components/AppError';
import toJson from 'enzyme-to-json';

// const ProblemChild = () => {
//   throw new Error('something went wrong');
// };

describe('Error Boundary component', () => {
  it('should render children - no error', () => {
    const defaultProps = {
      children: <span>test children</span>,
      FallbackComponent: AppError,
      onError: jest.fn()
    };

    const wrapper = shallow(<ErrorBoundary {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render fallback component - with error', () => {
    const defaultProps = {
      children: <span>test children</span>,
      FallbackComponent: AppError,
      onError: jest.fn()
    };

    const wrapper = shallow(<ErrorBoundary {...defaultProps} />);
    wrapper.setState({
      error: true,
      info: 'test info'
    });

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it('catches the error and returns a fallback component', () => {
  //   const wrapper = shallow(
  //     <ErrorBoundary>
  //       <ProblemChild />
  //     </ErrorBoundary>
  //   );
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });
});
