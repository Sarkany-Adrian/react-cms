// @flow
import React from 'react';
// theme
import { ThemeProvider } from 'styled-components';
import { SiteThemeContext } from 'contexts/theme';
import siteTheme from 'themes/siteTheme';

function ThemeSelect(): React$Element<*> {
  return (
    <SiteThemeContext.Consumer>
      {(props: any) => (
        <ThemeProvider theme={props.theme}>
          <select
            onChange={(e: SyntheticMouseEvent<*>) => props.handleThemeChange(e)}
          >
            {Object.keys(siteTheme).map((theme: any, index: number) => (
              <option key={Math.random()} value={theme}>
                Theme {index + 1}
              </option>
            ))}
          </select>
        </ThemeProvider>
      )}
    </SiteThemeContext.Consumer>
  );
}

export default ThemeSelect;
