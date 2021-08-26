import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/home/Home';
import NewReturn from 'pages/new-return/NewReturn';
import TicketSuccess from 'pages/ticket-success/TicketSuccess';

import { HOMEPAGE, NEW_TICKET, TICKET_SUCCESS } from './RouteContstants';

export default function RouterConfig() {
  return (
    <Switch>
      <Route exact path={HOMEPAGE} component={Home} />
      <Route exact path={NEW_TICKET} component={NewReturn} />
      <Route exact path={TICKET_SUCCESS} component={TicketSuccess} />
    </Switch>
  );
}
