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
        detail={filteredList.pending.length}
        color="blue"
        onClick={() => {
          changeSelectedStatus('pending');
        }}
      />
      <StatCard
        title="Kabul Edilen"
        detail={filteredList?.accepted || '0'}
        color="green"
        onClick={() => {
          changeSelectedStatus('accepted');
        }}
      />
      <StatCard
        title="Reddedilen"
        detail={filteredList.rejected.length}
        color="red"
        onClick={() => {
          changeSelectedStatus('rejected');
        }}
      />
    </div>
  );
}
