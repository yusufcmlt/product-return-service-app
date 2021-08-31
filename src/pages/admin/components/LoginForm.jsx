import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import useYupValidationResolver from 'hooks/useYupValidationResolver';

import loginSchema from 'utils/form-utils/schemas/loginSchema';
import adminFormDefaults from 'utils/form-utils/defaults/adminFormDefaults';

import Form from 'components/form/Form';
import Button from 'components/button/Button';

export default function LoginForm({ onSubmit, isErrorShown = false }) {
  // react-hook-form and validations
  const resolver = useYupValidationResolver(loginSchema);
  const methods = useForm({
    resolver,
    mode: 'onBlur',
    defaultValues: adminFormDefaults,
  });

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
