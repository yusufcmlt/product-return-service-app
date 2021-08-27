import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/home/Home';
import NewReturn from 'pages/new-return/NewReturn';
import TicketSuccess from 'pages/ticket-success/TicketSuccess';
import CheckTicket from 'pages/check-ticket/CheckTicket';
import TicketResponse from 'pages/ticket-response/TicketResponse';

import {
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
      <Route exact path={NEW_TICKET} component={NewReturn} />
      <Route exact path={TICKET_SUCCESS} component={TicketSuccess} />
      <Route exact path={CHECK_TICKET} component={CheckTicket} />
      <Route exact path={PUBLIC_TICKET_ITEM} component={TicketResponse} />
      <Route exact path={`${PUBLIC_TICKET_ITEM}/:id`} component={TicketResponse} />
    </Switch>
  );
}
