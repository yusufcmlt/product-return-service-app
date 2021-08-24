import React, { useEffect, useRef } from 'react';

import './PageWrapper.style.scss';

export default function PageWrapper({ children }) {
  const pageWrapperRef = useRef(null);

  useEffect(() => {
    const pageWrapperElement = pageWrapperRef.current;
    pageWrapperElement.classList.add('fade-in');

    return () => {
      pageWrapperElement.classList.remove('fade-in');
    };
  }, []);

  return (
    <div ref={pageWrapperRef} className="page">
      {children}
    </div>
  );
}
