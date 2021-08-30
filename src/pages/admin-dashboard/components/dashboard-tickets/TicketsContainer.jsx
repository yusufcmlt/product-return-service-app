import React from 'react';
import { useAdminTicketContext } from 'contexts/AdminTicketsContext';

import ConditionWrapper from 'components/condition-wrapper/ConditionWrapper';
import TicketsHeader from './TicketsHeader';
import TicketsList from './TicketsList';

export default function TicketsContainer() {
  const { ticketList, filteredList, selectedStatus } = useAdminTicketContext();

  return (
    <div className="tickets__container">
      <TicketsHeader />
      {/* Render tickets by given status data */}
      <ConditionWrapper
        condition={!!selectedStatus}
        componentTrue={<TicketsList data={filteredList[selectedStatus]} />}
        componentFalse={<TicketsList data={ticketList} />}
      />
    </div>
  );
}
