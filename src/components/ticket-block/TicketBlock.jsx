/* eslint-disable */
import React from 'react';
import { ticketFormReasonMessages, ticketStatusMessage } from 'utils/form-utils/formConstants';

import './TicketBlock.style.scss';

export default function TicketBlock({ ticketData, ...props }) {
  const { id, ticketFirstName, ticketLastName, ticketReason, ticketStatus } = ticketData;

  return (
    <div role="button" className="ticket-block" {...props}>
      <span className="ticket-block__col">{id}</span>
      <span className="ticket-block__col">{`${ticketFirstName} ${ticketLastName}`}</span>
      <span className="ticket-block__col">{ticketFormReasonMessages[ticketReason]}</span>
      <span className={`ticket-block__col ticket-block__col--${ticketStatus}`}>
        {ticketStatusMessage[ticketStatus]}
      </span>
    </div>
  );
}
