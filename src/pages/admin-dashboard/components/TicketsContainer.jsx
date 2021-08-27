import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAdminTicketContext } from 'contexts/AdminTicketsContext';
import { ADMIN_TICKET_LIST } from 'routes/RouteContstants';

import TicketBlock from 'components/ticket-block/TicketBlock';
import TicketsHeader from './TicketsHeader';

export default function TicketsContainer() {
  const { ticketList, filteredList, selectedStatus } = useAdminTicketContext();
  const history = useHistory();

  const editIndividualTicket = (id) => {
    history.push(`${ADMIN_TICKET_LIST}/${id}`);
  };

  return (
    <div className="tickets-container">
      <TicketsHeader />
      {selectedStatus
        ? filteredList[selectedStatus] &&
          filteredList[selectedStatus].map((ticket) => (
            <TicketBlock
              key={ticket.id}
              ticketData={ticket}
              onClick={() => {
                editIndividualTicket(ticket.id);
              }}
            />
          ))
        : ticketList.map((ticket) => (
            <TicketBlock
              key={ticket.id}
              ticketData={ticket}
              onClick={() => {
                editIndividualTicket(ticket.id);
              }}
            />
          ))}
    </div>
  );
}
