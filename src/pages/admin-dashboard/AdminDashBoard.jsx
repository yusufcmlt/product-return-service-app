import React from 'react';
import { useParams } from 'react-router-dom';
import { useAdminTicketContext } from 'contexts/AdminTicketsContext';

import Loading from 'components/loading/Loading';
import ConditionWrapper from 'components/condition-wrapper/ConditionWrapper';
import DashBoardTickets from './components/dashboard-tickets/DashBoardTickets';
import DashBoardTicketUpdate from './components/dashboard-ticket-update/DashBoardTicketUpdate';

import './AdminDashBoard.style.scss';

export default function AdminDashBoard() {
  const { id } = useParams();
  const { isLoading } = useAdminTicketContext();

  return (
    <Loading isLoading={isLoading}>
      <section className="admin-dashboard-page">
        {/* Check if there is an id present */}
        <ConditionWrapper
          condition={!!id}
          componentTrue={<DashBoardTicketUpdate id={id} />}
          componentFalse={<DashBoardTickets />}
        />
      </section>
    </Loading>
  );
}
