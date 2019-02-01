// @flow
import React from 'react';
// theme
import { ThemeProvider } from 'styled-components';
import { SiteThemeContext } from 'contexts/theme';
import siteTheme from 'themes/siteTheme';

type TProps = {
  handleThemeChange?: (e: any) => void,
  theme?: Object
};

function ThemeSelect(): React$Element<*> {
  return (
    <SiteThemeContext.Consumer>
      {(props: ?TProps) => {
        if (props) {
          const { handleThemeChange, theme } = props;
          return (
            <ThemeProvider theme={theme}>
              <select
                onChange={(e: SyntheticMouseEvent<*>) =>
                  handleThemeChange && handleThemeChange(e)
                }
              >
                {Object.keys(siteTheme).map((themeName: any, index: number) => (
                  <option key={themeName} value={themeName}>
                    Theme {index + 1}
                  </option>
                ))}
              </select>
            </ThemeProvider>
          );
        }
        return null;
      }}
    </SiteThemeContext.Consumer>
  );
}

export default ThemeSelect;
