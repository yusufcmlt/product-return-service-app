import React from 'react';
import { Router } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';

import { TicketProvider } from 'contexts/TicketContext';
import { AuthContext } from 'contexts/AuthContext';

// Router and Context wrapper for testing purposes
export const testHistory = createMemoryHistory();

export default function TestWrapper({ children, authValues }) {
  return (
    <Router history={testHistory}>
      <AuthContext.Provider value={{ ...authValues }}>
        <TicketProvider>{children}</TicketProvider>
      </AuthContext.Provider>
    </Router>
  );
}
