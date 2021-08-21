import React from 'react';

import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar';

import './Header.style.scss';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
}
