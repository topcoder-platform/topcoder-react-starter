/**
 * Root component of the app.
 */

import React from 'react';
import Routes from 'routes';

import { DevTools, MetaTags, isomorphy } from 'topcoder-react-utils';

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  require('topcoder-react-utils/dist/prod/style.css');
} else {
  require('topcoder-react-utils/dist/dev/style.css');
}
/* eslint-enable global-require */

export default function Application() {
  return (
    <div>
      <MetaTags
        title="Topcoder React Starter"
        description="Yet another webapp based on Topcoder React Starter Kit"
      />
      <Routes />
      { isomorphy.isDevBuild() ? <DevTools /> : undefined }
    </div>
  );
}
