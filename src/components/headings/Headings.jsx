import React from 'react';

import './Headings.style.scss';

function SubHeading({ children }) {
  return (
    <h3 data-testid="app-heading-subtitle" className="heading__subtitle">
      {children}
    </h3>
  );
}

function TitleHeading({ children }) {
  return (
    <h1 data-testid="app-heading-title" className="heading__title">
      {children}
    </h1>
  );
}

export { SubHeading, TitleHeading };
