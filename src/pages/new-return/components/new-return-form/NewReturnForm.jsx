import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import useYupValidationResolver from 'hooks/useYupValidationResolver';

import { ticketSchema, newTicketFormDefaults } from 'utils/form-utils/schemas/ticketSchema';

import Form from 'components/form/Form';
import Button from 'components/button/Button';
import FormPersonalInfo from './FormPersonalInfo';
import FormItemInfo from './FormItemInfo';

import '../../NewReturn.style.scss';

export default function NewReturnForm() {
  const history = useHistory();

  const resolver = useYupValidationResolver(ticketSchema);
  const methods = useForm({
    resolver,
    mode: 'all',
    defaultValues: newTicketFormDefaults,
  });
  const { isValid } = methods.formState;

  const submitForm = (data) => {
    console.log(data);
    history.replace('/basvuru-basarili');
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(submitForm)}>
        <FormPersonalInfo />
        <FormItemInfo />
        <div className="form__part--button">
          <Button
            buttonText="İade Sürecini Başlat"
            buttonStyle="black"
            isSubmit
            isDisabled={!isValid}
          />
        </div>
      </Form>
    </FormProvider>
  );
}
