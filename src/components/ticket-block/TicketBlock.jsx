import React from 'react';
import { ticketStatusMessage } from 'utils/form-utils/formConstants';

import './TicketBlock.style.scss';

export default function TicketBlock({ ticketData }) {
  const { id, ticketFirstName, ticketLastName, ticketReason, ticketStatus } = ticketData;

  return (
    <div className="ticket-block">
      <span className="ticket-block__col">{id}</span>
      <span className="ticket-block__col">{`${ticketFirstName} ${ticketLastName}`}</span>
      <span className="ticket-block__col">{ticketReason}</span>
      <span className={`ticket-block__col ticket-block__col--${ticketStatus}`}>
        {ticketStatusMessage[ticketStatus]}
      </span>
    </div>
  );
}
