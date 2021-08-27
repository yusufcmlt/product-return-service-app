import TicketBlock from 'components/ticket-block/TicketBlock';
import React from 'react';
import TicketsHeader from './TicketsHeader';

const mockData = {
  id: 123456578,
  ticketFirstName: 'Yusuf',
  ticketLastName: 'Cemal',
  ticketReason: 'Hasarli',
  ticketStatus: 'pending',
};
export default function TicketsContainer() {
  return (
    <div className="tickets-container">
      <TicketsHeader />
      <TicketBlock ticketData={mockData} />
      <TicketBlock ticketData={mockData} />
      <TicketBlock ticketData={mockData} />
      <TicketBlock ticketData={mockData} />
    </div>
  );
}
