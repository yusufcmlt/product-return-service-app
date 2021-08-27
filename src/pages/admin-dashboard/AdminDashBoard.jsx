import React from 'react';
import { TitleHeading } from 'components/headings/Headings';
import StatsContainer from './components/StatsContainer';
import TicketsContainer from './components/TicketsContainer';

import './AdminDashBoard.style.scss';

export default function AdminDashBoard() {
  return (
    <section className="admin-dashboard-page">
      <TitleHeading>İade Yönetim Sistemi</TitleHeading>
      <StatsContainer />
      <TicketsContainer />
    </section>
  );
}
