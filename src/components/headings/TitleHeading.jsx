import React from 'react';

import './Headings.style.scss';

export default function TitleHeading({ children }) {
  return (
    <h1 data-testid="app-heading-title" className="heading__title">
      {children}
    </h1>
  );
}
