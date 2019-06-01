import React from 'react';
import { shallow, mount } from 'enzyme';

import ErrorBoundary from 'components/ErrorBoundary';
import AppError from 'components/AppError';
import toJson from 'enzyme-to-json';

const ProblemChild = () => null;

/**
 *
 */
test('should render children - no error', () => {
  const defaultProps = {
    children: <span>test children</span>,
    FallbackComponent: AppError,
    onError: jest.fn()
  };

  const wrapper = shallow(<ErrorBoundary {...defaultProps} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

/**
 *
 */
test('should render fallback component - with error', () => {
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

/**
 *
 */
test('triggers component did catch lifecycle method when an error is received', () => {
  const defaultProps = {
    children: <span>test children</span>,
    FallbackComponent: AppError
  };

  const wrapper = mount(
    <ErrorBoundary {...defaultProps}>
      <ProblemChild />
    </ErrorBoundary>
  );

  const error = new Error('hi!');
  wrapper.find(ProblemChild).simulateError(error);
  expect(wrapper.state('error')).toEqual(error);
});

/**
 *
 */
test('should invoke props.onError method.', () => {
  const defaultProps = {
    children: <span>test children</span>,
    FallbackComponent: AppError,
    onError: jest.fn()
  };

  const wrapper = mount(
    <ErrorBoundary {...defaultProps}>
      <ProblemChild />
    </ErrorBoundary>
  );

  const error = new Error('hi!');
  wrapper.find(ProblemChild).simulateError(error);
  expect(defaultProps.onError).toHaveBeenCalled();
});
