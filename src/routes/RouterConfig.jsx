import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/home/Home';
import NewTicket from 'pages/new-ticket/NewTicket';
import TicketSuccess from 'pages/ticket-success/TicketSuccess';
import CheckTicket from 'pages/check-ticket/CheckTicket';
import TicketResponse from 'pages/ticket-response/TicketResponse';
import Admin from 'pages/admin/Admin';
import AdminDashBoard from 'pages/admin-dashboard/AdminDashBoard';

import PrivateRoute from './PrivateRoute';
import NotFoundRoute from './NotFoundRoute';

import {
  ADMIN,
  ADMIN_TICKET_LIST,
  CHECK_TICKET,
  HOMEPAGE,
  NEW_TICKET,
  PUBLIC_TICKET_ITEM,
  TICKET_SUCCESS,
} from './RouteContstants';

export default function RouterConfig() {
  return (
    <Switch>
      <Route exact path={HOMEPAGE} component={Home} />
      <Route exact path={NEW_TICKET} component={NewTicket} />
      <Route exact path={TICKET_SUCCESS} component={TicketSuccess} />
      <Route exact path={CHECK_TICKET} component={CheckTicket} />
      <Route exact path={`${PUBLIC_TICKET_ITEM}/:id?`} component={TicketResponse} />
      <Route exact path={ADMIN} component={Admin} />
      {/* Private route with optional id parameter */}
      <PrivateRoute exact path={`${ADMIN_TICKET_LIST}/:id?`}>
        <AdminDashBoard />
      </PrivateRoute>
      {/* Private route with optional id parameter */}
      <Route path="*">
        <NotFoundRoute />
      </Route>
    </Switch>
  );
}
