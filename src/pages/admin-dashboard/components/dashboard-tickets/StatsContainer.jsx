import React from 'react';
import { useAdminTicketContext } from 'contexts/AdminTicketsContext';

import StatCard from 'components/stat-card/StatCard';

export default function StatsContainer() {
  const { ticketList, filteredList, changeSelectedStatus } = useAdminTicketContext();

  return (
    <div className="stats-container">
      <StatCard
        title="Tümü"
        detail={ticketList.length}
        onClick={() => {
          changeSelectedStatus('');
        }}
      />
      <StatCard
        title="Bekleyen"
        detail={filteredList?.pending?.length || '0'}
        color="blue"
        onClick={() => {
          changeSelectedStatus('pending');
        }}
      />
      <StatCard
        title="Kabul Edilen"
        detail={filteredList?.accepted?.length || '0'}
        color="green"
        onClick={() => {
          changeSelectedStatus('accepted');
        }}
      />
      <StatCard
        title="Reddedilen"
        detail={filteredList?.rejected?.length || '0'}
        color="red"
        onClick={() => {
          changeSelectedStatus('rejected');
        }}
      />
    </div>
  );
}
