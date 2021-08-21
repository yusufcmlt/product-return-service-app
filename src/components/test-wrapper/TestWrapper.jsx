import React from 'react';
import { Router } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';

import { LanguageProvider } from '../../contexts/LanguageContext';

// Router and Context wrapper for testing purposes
export const testHistory = createMemoryHistory();
export default function TestWrapper({ children }) {
  return (
    <Router history={testHistory}>
      <LanguageProvider>{children}</LanguageProvider>
    </Router>
  );
}
