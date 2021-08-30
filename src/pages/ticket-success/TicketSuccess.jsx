import React from 'react';

import { useTicketContext } from 'contexts/TicketContext';
import { Redirect } from 'react-router-dom';

import { HOMEPAGE } from 'routes/RouteContstants';

import ConditionWrapper from 'components/condition-wrapper/ConditionWrapper';
import SuccessContent from './components/SuccessContent';

export default function TicketSuccess() {
  const { ticketData } = useTicketContext();
  const ticketExists = !!Object.keys(ticketData).length;

  return (
    <ConditionWrapper
      condition={ticketExists}
      componentTrue={<SuccessContent data={ticketData} />}
      componentFalse={<Redirect to={HOMEPAGE} />}
    />
  );
}
