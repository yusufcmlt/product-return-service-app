import React from 'react';
import { Redirect } from 'react-router-dom';

import { useAdminTicketContext } from 'contexts/AdminTicketsContext';
import { ADMIN_TICKET_LIST } from 'routes/RouteContstants';

import { SubHeading } from 'components/headings/Headings';
import AdminTicketDetail from './AdminTicketDetail';
import EditTicketForm from './EditTicketForm';
import StatsContainer from './StatsContainer';
import TicketsContainer from './TicketsContainer';

export default function DashboardContent({ id }) {
  const { getIndividualTicket } = useAdminTicketContext();

  if (id) {
    const individualTicket = getIndividualTicket(id);
    if (individualTicket) {
      return (
        <div className="dashboard__edit">
          <SubHeading>İade durumunu güncelleyin</SubHeading>
          <AdminTicketDetail data={individualTicket} />
          <EditTicketForm id={id} />
        </div>
      );
    }
    return <Redirect to={ADMIN_TICKET_LIST} />;
  }
  return (
    <>
      <StatsContainer />
      <TicketsContainer />
    </>
  );
}
