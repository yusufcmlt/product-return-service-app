import useLocalStorage from 'hooks/useLocalStorage';
import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

function useAuthContext() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [isAdmin, setAdmin] = useLocalStorage('isAdmin', false);

  const loginAsAdmin = () => {
    setAdmin(true);
  };
  const logout = () => {
    setAdmin(false);
  };

  const value = { isAdmin, loginAsAdmin, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { useAuthContext, AuthProvider, AuthContext };
