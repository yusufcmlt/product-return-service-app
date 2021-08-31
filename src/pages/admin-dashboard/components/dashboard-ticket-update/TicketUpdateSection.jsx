import React from 'react';

import { TitleHeading } from 'components/headings/Headings';
import TicketDetailsCard from 'components/ticket-details-card/TicketDetailsCard';
import EditTicketForm from './EditTicketForm';

export default function TicketUpdateSection({ ticketData, id }) {
  return (
    <div className="dashboard__ticket-update">
      <TitleHeading>İade durumunu güncelleyin</TitleHeading>
      <TicketDetailsCard ticketData={ticketData} />
      <EditTicketForm id={id} />
    </div>
  );
}
