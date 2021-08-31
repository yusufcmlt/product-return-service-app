import React from 'react';
import { AdminTicketProvider } from 'contexts/AdminTicketsContext';

import { useAuthContext } from 'contexts/AuthContext';
import { Redirect, Route } from 'react-router-dom';
import { ADMIN } from './RouteContstants';

function PrivateRoute({ children, ...props }) {
  const { isAdmin } = useAuthContext();

  return (
    <Route {...props}>
      {isAdmin ? <AdminTicketProvider>{children}</AdminTicketProvider> : <Redirect to={ADMIN} />}
    </Route>
  );
}
export default PrivateRoute;
