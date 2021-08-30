import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { addNewTicket } from 'services/firebase/firebaseUtils';
import { useHistory } from 'react-router-dom';
import { useTicketContext } from 'contexts/TicketContext';

import useYupValidationResolver from 'hooks/useYupValidationResolver';

import ticketSchema from 'utils/form-utils/schemas/ticketSchema';
import modifyReturnFormData from 'utils/form-utils/formHelpers';
import newTicketFormDefaults from 'utils/form-utils/defaults/newReturnTicketDefaults';
import { TICKET_SUCCESS } from 'routes/RouteContstants';

import Form from 'components/form/Form';
import Button from 'components/button/Button';
import FormPersonalInfo from './FormPersonalInfo';
import FormItemInfo from './FormItemInfo';

export default function NewReturnForm() {
  const history = useHistory();
  const { createTicket } = useTicketContext();

  // react-hook-form and validations
  const resolver = useYupValidationResolver(ticketSchema);
  const methods = useForm({
    resolver,
    mode: 'all',
    defaultValues: newTicketFormDefaults,
  });

  const [formStatus, setFormStatus] = useState({ message: '', status: 'pending' });
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const submitForm = (data) => {
    // Disable button on submit.
    setButtonDisabled(true);

    // Modify data: add dates, change FileList then send
    const modifiedData = modifyReturnFormData(data);

    const onSuccess = (ticketDatabaseId) => {
      // Set form status message
      setFormStatus({ message: 'Talebiniz alındı. Yönlendiriliyorsunuz', status: 'success' });

      // Add ticket data into context
      createTicket({ ...modifiedData, ticketDatabaseId });
      // Navigate to success page after 3s
      setTimeout(() => {
        history.replace(TICKET_SUCCESS);
      }, 3000);
    };
    const onError = (error) => {
      console.error(error);
      setFormStatus({ message: 'İşleminiz gerçekleştirilemedi.', status: 'fail' });
    };

    addNewTicket(modifiedData, onSuccess, onError);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(submitForm)}>
        <FormPersonalInfo />
        <FormItemInfo />
        <div className="form__part--button">
          <Button
            buttonText="İade Sürecini Başlat"
            buttonStyle="green"
            isSubmit
            isDisabled={isButtonDisabled}
          />
        </div>
        <p className={`form__status form__status--${formStatus.status}`}>{formStatus.message}</p>
      </Form>
    </FormProvider>
  );
}
