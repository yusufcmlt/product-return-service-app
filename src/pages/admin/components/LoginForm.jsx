import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useAuthContext } from 'contexts/AuthContext';

import { adminLogin } from 'services/firebase/firebaseUtils';
import loginSchema from 'utils/form-utils/schemas/loginSchema';
import adminFormDefaults from 'utils/form-utils/defaults/adminFormDefaults';

import Form from 'components/form/Form';
import Button from 'components/button/Button';

export default function LoginForm() {
  const { loginAsAdmin } = useAuthContext();
  // react-hook-form and validations
  const resolver = useYupValidationResolver(loginSchema);
  const methods = useForm({
    resolver,
    mode: 'onBlur',
    defaultValues: adminFormDefaults,
  });

  // Error state
  const [isErrorShown, setErrorShown] = useState(false);

  const { handleSubmit } = methods;

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
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(formLogin)}>
        <Form.Row
          labelForId="adminUserName"
          labelText="Kullanıcı adınız"
          isTextShown={isErrorShown}
          statusText="Giriş yapılamadı"
        >
          <Form.TextInput id="adminUserName" />
        </Form.Row>
        <Form.Row
          labelForId="adminPassword"
          labelText="Şifreniz"
          isTextShown={isErrorShown}
          statusText=" "
        >
          <Form.TextInput id="adminPassword" type="password" />
        </Form.Row>
        <Form.Row>
          <Button isSubmit buttonText="Giriş Yap" />
        </Form.Row>
      </Form>
    </FormProvider>
  );
}
