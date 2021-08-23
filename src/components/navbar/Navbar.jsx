import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

import { HOMEPAGE, ADMIN, ABOUT } from '../../routes/RouteContstants';
import { languagesButtons } from '../../utils/languages/languages';

import './Navbar.style.scss';

export default function Navbar() {
  const { language } = useLanguage();
  const { homepage, admin, about } = languagesButtons[language];

  return (
    <nav className="navbar">
      <Link to={HOMEPAGE}>{homepage}</Link>
      <Link to={ABOUT}>{about}</Link>
      <Link data-testid="navbar-link-admin" to={ADMIN}>
        {admin}
      </Link>
    </nav>
  );
}
