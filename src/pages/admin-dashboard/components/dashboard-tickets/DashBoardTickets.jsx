import { TitleHeading } from 'components/headings/Headings';
import React from 'react';
import StatsContainer from './StatsContainer';
import TicketsContainer from './TicketsContainer';

export default function DashBoardTickets() {
  return (
    <div className="dashboard__tickets">
      <TitleHeading>İade Yönetimi</TitleHeading>
      <StatsContainer />
      <TicketsContainer />
    </div>
  );
}
