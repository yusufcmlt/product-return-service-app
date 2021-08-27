import React from 'react';
import { useAdminTicketContext } from 'contexts/AdminTicketsContext';

import { TitleHeading } from 'components/headings/Headings';
import StatsContainer from './components/StatsContainer';
import TicketsContainer from './components/TicketsContainer';

import './AdminDashBoard.style.scss';

export default function AdminDashBoard() {
  const { isLoading } = useAdminTicketContext();

  return (
    <section className="admin-dashboard-page">
      {!isLoading ? (
        <>
          <TitleHeading>İade Yönetim Sistemi</TitleHeading>
          <StatsContainer />
          <TicketsContainer />
        </>
      ) : (
        <TitleHeading>Yükleniyor</TitleHeading>
      )}
    </section>
  );
}
