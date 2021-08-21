import React from 'react';

import './Headings.style.scss';

export default function SubHeading({ children }) {
  return (
    <h3 data-testid="app-heading-subtitle" className="heading__subtitle">
      {children}
    </h3>
  );
}
