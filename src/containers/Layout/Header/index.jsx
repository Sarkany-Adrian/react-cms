// @flow
import React, { type Node } from 'react';
// theme
import { ThemeProvider } from 'styled-components';
import { SiteThemeContext } from 'contexts/theme';
// style
import './styles.scss';

type Props = {
  left: Node,
  center?: Node,
  right: Node
};

function Header({ left, center, right }: Props): React$Element<*> {
  return (
    <SiteThemeContext.Consumer>
      {(props: any) => (
        <ThemeProvider theme={props.theme}>
          <div className="app-header">
            <div className="h-100 row">
              <div className="app-header__left col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                {left}
              </div>
              <div
                className={`app-header__center col-12 col-sm-3 col-md-3 col-lg-5 col-xl-5 ${
                  !center ? 'd-none d-sm-block' : ''
                }`}
              >
                {center}
              </div>
              <div className="app-header__right col-12 col-sm-5 col-md-5 col-lg-4 col-xl-4">
                {right}
              </div>
            </div>
          </div>
        </ThemeProvider>
      )}
    </SiteThemeContext.Consumer>
  );
}

Header.defaultProps = {
  center: ''
};

export default Header;
