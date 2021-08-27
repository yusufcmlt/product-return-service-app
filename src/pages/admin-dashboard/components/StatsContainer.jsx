import StatCard from 'components/stat-card/StatCard';
import React from 'react';

export default function StatsContainer() {
  return (
    <div className="stats-container">
      <StatCard title="Tümü" detail="35" />
      <StatCard title="Bekleyen" detail="35" color="blue" />
      <StatCard title="Kabul Edilen" detail="35" color="green" />
      <StatCard title="Reddedilen" detail="35" color="red" />
    </div>
  );
}
