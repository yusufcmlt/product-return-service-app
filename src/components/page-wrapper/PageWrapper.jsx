import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import './PageWrapper.style.scss';

export default function PageWrapper({ children }) {
  const pageRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const pageElementClasses = pageRef.current.classList;
    pageElementClasses.remove('fade-in');
    setTimeout(() => {
      pageElementClasses.add('fade-in');
    }, 100);
  }, [pathname]);

  useEffect(() => {}, []);

  return (
    <div ref={pageRef} className="page">
      {children}
    </div>
  );
}
