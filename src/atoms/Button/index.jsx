// @flow
import React from 'react';
import cx from 'classnames';
import pick from 'lodash.pick';
// theme
import { ThemeProvider } from 'styled-components';
import { SiteThemeContext } from 'contexts/theme';
// style
import StyledButton from './style';

type Props = {
  children: React$Element<*> | string,
  onClick: (e: any) => void,
  className?: string,
  rest?: ?Object
};

function Button({
  children,
  onClick,
  className,
  ...rest
}: Props): React$Element<*> {
  const themeProps = pick(rest, ['primary', 'secondary', 'danger']);
  return (
    <SiteThemeContext.Consumer>
      {(props: any) => (
        <ThemeProvider theme={props.theme}>
          <StyledButton
            type="button"
            onClick={onClick}
            className={cx('button-atom', className)}
            {...themeProps}
          >
            {children}
          </StyledButton>
        </ThemeProvider>
      )}
    </SiteThemeContext.Consumer>
  );
}

Button.defaultProps = {
  className: '',
  rest: null
};

export default Button;
