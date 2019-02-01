// @flow
import React, { Component, type Node } from 'react';
import siteTheme from 'themes/siteTheme';

// create the context with a default value
// the default value is being used if the provider
// fails to pass a value
// in this case, no default is needed
// as we're always reading from the component state
export const SiteThemeContext = React.createContext<*>();

type Props = {
  children: Node
};

type State = {
  theme: Object
};

class SiteThemeProvider extends Component<Props, State> {
  state = {
    theme: siteTheme.theme1
  };

  handleThemeChange = (e: any) => {
    const key = e.target.value;
    const theme = siteTheme[key];
    this.setState({ theme });
  };

  render() {
    const { children } = this.props;

    return (
      <SiteThemeContext.Provider
        value={{
          ...this.state,
          handleThemeChange: this.handleThemeChange
        }}
      >
        {children}
      </SiteThemeContext.Provider>
    );
  }
}

export default SiteThemeProvider;
