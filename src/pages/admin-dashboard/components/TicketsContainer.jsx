import React from 'react';
import { useAdminTicketContext } from 'contexts/AdminTicketsContext';
import TicketBlock from 'components/ticket-block/TicketBlock';

import TicketsHeader from './TicketsHeader';

export default function TicketsContainer() {
  const { ticketList, filteredList, selectedStatus } = useAdminTicketContext();

  return (
    <div className="tickets-container">
      <TicketsHeader />
      {selectedStatus
        ? filteredList[selectedStatus] &&
          filteredList[selectedStatus].map((ticket) => <TicketBlock ticketData={ticket} />)
        : ticketList.map((ticket) => <TicketBlock ticketData={ticket} />)}
    </div>
  );
}
