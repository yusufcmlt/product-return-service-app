import React from 'react';
import { useHistory } from 'react-router-dom';

import TicketBlock from 'components/ticket-block/TicketBlock';

import { ADMIN_TICKET_LIST } from 'routes/RouteContstants';

// List tickets with given data
export default function TicketsList({ data }) {
  const history = useHistory();

  const redirectToIndividualTicket = (ticketId) => {
    history.push(`${ADMIN_TICKET_LIST}/${ticketId}`);
  };

  return (
    <div className="tickets__list">
      {data &&
        data.map((ticket) => (
          <TicketBlock
            key={ticket.id}
            ticketData={ticket}
            onClick={() => {
              redirectToIndividualTicket(ticket.id);
            }}
          />
        ))}
    </div>
  );
}
