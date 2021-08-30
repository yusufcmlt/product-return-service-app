import React, { useState } from 'react';
import { TitleHeading } from 'components/headings/Headings';
import { Redirect } from 'react-router-dom';
import { useAuthContext } from 'contexts/AuthContext';

import { ADMIN_TICKET_LIST } from 'routes/RouteContstants';
import { adminLogin } from 'services/firebase/firebaseUtils';

import ConditionWrapper from 'components/condition-wrapper/ConditionWrapper';
import LoginForm from './components/LoginForm';

import './Admin.style.scss';

export default function Admin() {
  const { isAdmin, loginAsAdmin } = useAuthContext();
  const [isErrorShown, setErrorShown] = useState(false);

  const formLogin = (data) => {
    const onLoginSuccess = () => {
      setErrorShown(false);
      loginAsAdmin();
    };
    const onLoginFail = (error = '') => {
      if (error) {
        console.error(error);
      }
      setErrorShown(true);
    };
    adminLogin(data, onLoginSuccess, onLoginFail);
  };

  return (
    <ConditionWrapper
      condition={isAdmin}
      componentTrue={<Redirect to={ADMIN_TICKET_LIST} />}
      componentFalse={
        <section data-testid="test-admin-page" className="admin-page">
          <TitleHeading>Sisteme Giriş Yapın</TitleHeading>
          <LoginForm onSubmit={formLogin} isErrorShown={isErrorShown} />
        </section>
      }
    />
  );
}
