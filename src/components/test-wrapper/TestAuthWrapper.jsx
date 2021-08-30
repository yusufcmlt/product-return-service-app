import { AuthContext, AuthProvider } from 'contexts/AuthContext';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function TestAuthWrapper({ children }) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthContext.Consumer>{children}</AuthContext.Consumer>
      </AuthProvider>
    </BrowserRouter>
  );
}
