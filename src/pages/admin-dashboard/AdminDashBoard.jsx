import React from 'react';
import { useParams } from 'react-router-dom';
import { useAdminTicketContext } from 'contexts/AdminTicketsContext';

import { TitleHeading } from 'components/headings/Headings';
import DashboardContent from './components/DashboardContent';

import './AdminDashBoard.style.scss';

export default function AdminDashBoard() {
  const { id } = useParams();
  const { isLoading } = useAdminTicketContext();

  return !isLoading ? (
    <section className="admin-dashboard-page">
      <TitleHeading>İade Yönetim Sistemi</TitleHeading>
      <DashboardContent id={id} />
    </section>
  ) : (
    <TitleHeading>Yükleniyor</TitleHeading>
  );
}
