import React from 'react';

import TicketDetailColumn from './TicketDetailColumn';

import './TicketDetailsCard.style.scss';

// Manuel sorting the info blocks
const firstInfoBlock = [
  'ticketLink',
  'ticketFirstName',
  'ticketLastName',
  'ticketAge',
  'ticketIdNumber',
  'ticketAddress',
  'ticketTelNumber',
];
const secondInfoBlock = [
  'id',
  'ticketItemCode',
  'ticketReason',
  'ticketReasonDetail',
  'ticketStatus',
  'ticketResponseMessage',
  'ticketFile',
];
const thirdInfoBlock = ['ticketCreatedAt', 'ticketModifiedAt'];

export default function TicketDetailsCard({ ticketData }) {
  return (
    <div className="ticket-detail-card">
      <TicketDetailColumn infoArray={firstInfoBlock} ticketData={ticketData} />
      <TicketDetailColumn infoArray={secondInfoBlock} ticketData={ticketData} />
      <TicketDetailColumn infoArray={thirdInfoBlock} ticketData={ticketData} />
    </div>
  );
}
