import { TitleHeading } from 'components/headings/Headings';
import { useAuthContext } from 'contexts/AuthContext';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { ADMIN_TICKET_LIST } from 'routes/RouteContstants';
import LoginForm from './components/LoginForm';

import './Admin.style.scss';

export default function Admin() {
  const { isAdmin } = useAuthContext();

  return isAdmin ? (
    <Redirect to={ADMIN_TICKET_LIST} />
  ) : (
    <section className="admin-page">
      <TitleHeading>Sisteme Giriş Yapın</TitleHeading>
      <LoginForm />
    </section>
  );
}
