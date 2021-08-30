/* eslint-disable */
import React from 'react';
import { ticketStatusMessage } from 'utils/form-utils/formConstants';
import { getTicketStatusColor } from 'utils/ticket-data-utils/ticketDataUtils';

import './TicketBlock.style.scss';

export default function TicketBlock({ ticketData, ...props }) {
  const { id, ticketFirstName, ticketLastName, ticketReason, ticketStatus } = ticketData;

  const statusColor = getTicketStatusColor(ticketStatus);

  return (
    <div role="button" className="ticket-block" {...props}>
      <span className="ticket-block__col">{id}</span>
      <span className="ticket-block__col">{`${ticketFirstName} ${ticketLastName}`}</span>
      <span className="ticket-block__col">{ticketReason}</span>
      <span className={`ticket-block__col ticket-block__col--${statusColor}`}>{ticketStatus}</span>
    </div>
  );
}
