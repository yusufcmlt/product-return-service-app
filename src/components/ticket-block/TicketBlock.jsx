/* eslint-disable */
import React from 'react';
import { ticketStatusMessage } from 'utils/form-utils/formConstants';
import { getTicketStatusColor } from 'utils/ticket-data-utils/ticketDataUtils';

import './TicketBlock.style.scss';

export default function TicketBlock({ ticketData, ...props }) {
  const { id, ticketFirstName, ticketLastName, ticketReason, ticketStatus } = ticketData;

  const statusColor = getTicketStatusColor(ticketStatus);

  return (
    <div data-testid="test-ticketblock-button" role="button" className="ticket-block" {...props}>
      <span data-testid="test-ticketblock-span" className="ticket-block__col">
        {id}
      </span>
      <span
        data-testid="test-ticketblock-span"
        className="ticket-block__col"
      >{`${ticketFirstName} ${ticketLastName}`}</span>
      <span data-testid="test-ticketblock-span" className="ticket-block__col">
        {ticketReason}
      </span>
      <span
        data-testid="test-ticketblock-span"
        className={`ticket-block__col ticket-block__col--${statusColor}`}
      >
        {ticketStatus}
      </span>
    </div>
  );
}
