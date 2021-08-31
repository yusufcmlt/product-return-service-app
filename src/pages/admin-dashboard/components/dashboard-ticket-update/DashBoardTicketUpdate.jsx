import React from 'react';
import { useAdminTicketContext } from 'contexts/AdminTicketsContext';
import { Redirect } from 'react-router-dom';

import { ADMIN_TICKET_LIST } from 'routes/RouteContstants';

import ConditionWrapper from 'components/condition-wrapper/ConditionWrapper';
import TicketUpdateSection from './TicketUpdateSection';

export default function DashBoardTicketUpdate({ id }) {
  const { getIndividualTicket } = useAdminTicketContext();
  const ticketData = getIndividualTicket(id);

  return (
    // Render if ticket exists
    <ConditionWrapper
      condition={!!ticketData}
      componentTrue={<TicketUpdateSection ticketData={ticketData} id={id} />}
      componentFalse={<Redirect to={ADMIN_TICKET_LIST} />}
    />
  );
}
