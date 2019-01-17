// @flow
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

function NotFound(): React$Element<'div'> {
  return (
    <div>
      Sorry, the page you are looking for could not be found.
      <BrowserRouter>
        <Link to="/asdsad">Return to the home page?</Link>
      </BrowserRouter>
    </div>
  );
}

export default NotFound;
