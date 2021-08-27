import { useAuthContext } from 'contexts/AuthContext';
import React from 'react';
import { Link } from 'react-router-dom';

import { HOMEPAGE, ADMIN } from '../../routes/RouteContstants';

import './Navbar.style.scss';

export default function Navbar() {
  const { isAdmin, logout } = useAuthContext();

  return (
    <nav className="navbar">
      <Link to={HOMEPAGE}>Anasayfa</Link>
      {isAdmin ? (
        <button
          type="button"
          data-testid="navbar-link-admin"
          onClick={() => {
            logout();
          }}
        >
          Çıkış yap
        </button>
      ) : (
        <Link data-testid="navbar-link-admin" to={ADMIN}>
          Giriş Yap
        </Link>
      )}
    </nav>
  );
}
