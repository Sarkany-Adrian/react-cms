// @flow
import React from 'react';
import cx from 'classnames';
// theme
import { ThemeProvider } from 'styled-components';
import { SiteThemeContext } from 'contexts/theme';
// style
import StyledButton from './style';

type Props = {
  children: React$Element<*> | string,
  onClick: (e: any) => void,
  className?: string
};

function Button({ children, onClick, className }: Props): React$Element<*> {
  return (
    <SiteThemeContext.Consumer>
      {(props: any) => (
        <ThemeProvider theme={props.theme}>
          <StyledButton
            type="button"
            onClick={onClick}
            className={cx('button-atom', className)}
          >
            {children}
          </StyledButton>
        </ThemeProvider>
      )}
    </SiteThemeContext.Consumer>
  );
}

Button.defaultProps = {
  className: ''
};

export default Button;
