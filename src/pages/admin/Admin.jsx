import React from 'react';
import { TitleHeading } from 'components/headings/Headings';
import { Redirect } from 'react-router-dom';
import { useAuthContext } from 'contexts/AuthContext';
import { ADMIN_TICKET_LIST } from 'routes/RouteContstants';
import LoginForm from './components/LoginForm';

import './Admin.style.scss';

export default function Admin() {
  const { isAdmin } = useAuthContext();

  return isAdmin ? (
    <Redirect to={ADMIN_TICKET_LIST} />
  ) : (
    <section data-testid="test-admin-page" className="admin-page">
      <TitleHeading>Sisteme Giriş Yapın</TitleHeading>
      <LoginForm />
    </section>
  );
}
