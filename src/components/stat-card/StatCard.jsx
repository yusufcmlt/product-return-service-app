import React from 'react';

import './StatCard.style.scss';

export default function StatCard({ title, detail, color = 'gray', ...restProps }) {
  return (
    <button type="button" className={`stat-card stat-card--${color}`} {...restProps}>
      <span className="stat-card__title">{title}</span>
      <span className="stat-card__detail">{detail}</span>
    </button>
  );
}
