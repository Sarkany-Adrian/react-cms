// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Routes container
import App from 'containers/App';
// mobx
import { Provider } from 'mobx-react';
import stores from 'stores';

// theme context
import SiteThemeProvider from 'contexts/theme';

const appContainer: HTMLElement | null =
  document && document.getElementById('root');

if (appContainer) {
  ReactDOM.render(
    <BrowserRouter>
      <Provider {...stores}>
        <SiteThemeProvider>
          <App />
        </SiteThemeProvider>
      </Provider>
    </BrowserRouter>,
    appContainer
  );
}
