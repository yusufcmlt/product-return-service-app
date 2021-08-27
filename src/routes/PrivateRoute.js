import { useAuthContext } from 'contexts/AuthContext';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ADMIN } from './RouteContstants';

// screen if you're not yet authenticated.
function PrivateRoute({ children, ...props }) {
  const { isAdmin } = useAuthContext();

  return <Route {...props}>{isAdmin ? children : <Redirect to={ADMIN} />}</Route>;
}
export default PrivateRoute;
