import React from 'react';

import './PageWrapper.style.scss';

export default function PageWrapper({ children }) {
  return <div className="page">{children}</div>;
}
