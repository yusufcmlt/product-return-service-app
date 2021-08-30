import { TitleHeading } from 'components/headings/Headings';
import TicketDetailsCard from 'components/ticket-details-card/TicketDetailsCard';
import React from 'react';
import { getTicketStatusColor } from 'utils/ticket-data-utils/ticketDataUtils';

export default function TicketResponseContent({ data }) {
  const { ticketStatus } = data;

  const statusColor = getTicketStatusColor(ticketStatus);

  return (
    <section className="ticket-response-page">
      <TitleHeading>
        İade durumunuz:<span className={`ticket-status--${statusColor}`}>{ticketStatus}</span>
      </TitleHeading>
      <TicketDetailsCard ticketData={data} />
    </section>
  );
}
