import React from 'react';

import './StatCard.style.scss';

export default function StatCard({ title, detail, color = 'gray' }) {
  return (
    <div className={`stat-card stat-card--${color}`}>
      <span className="stat-card__title">{title}</span>
      <span className="stat-card__detail">{detail}</span>
    </div>
  );
}
