import { useAuthContext } from 'contexts/AuthContext';
import React from 'react';
import { Link } from 'react-router-dom';

import { HOMEPAGE, ADMIN, ADMIN_TICKET_LIST } from '../../routes/RouteContstants';

import './Navbar.style.scss';

export default function Navbar() {
  const { isAdmin, logout } = useAuthContext();

  return (
    <nav className="navbar">
      <Link to={HOMEPAGE}>Anasayfa</Link>
      {isAdmin ? (
        <>
          <Link data-testid="test-dashboard-link" to={ADMIN_TICKET_LIST}>
            Yönetim
          </Link>
          <button data-testid="test-logout-button" type="button" onClick={logout}>
            Çıkış yap
          </button>
        </>
      ) : (
        <Link data-testid="test-login-button" to={ADMIN}>
          Giriş Yap
        </Link>
      )}
    </nav>
  );
}
