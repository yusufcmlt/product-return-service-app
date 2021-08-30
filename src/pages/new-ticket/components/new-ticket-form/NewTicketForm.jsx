import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { addNewTicket } from 'services/firebase/firebaseUtils';
import { useHistory } from 'react-router-dom';
import { useTicketContext } from 'contexts/TicketContext';

import useYupValidationResolver from 'hooks/useYupValidationResolver';

import ticketSchema from 'utils/form-utils/schemas/ticketSchema';
import { getFileLengthOnly } from 'utils/form-utils/formHelpers';
import newTicketFormDefaults from 'utils/form-utils/defaults/newReturnTicketDefaults';
import { TICKET_SUCCESS } from 'routes/RouteContstants';

import Form from 'components/form/Form';
import Button from 'components/button/Button';
import FormPersonalInfo from './FormPersonalInfo';
import FormItemInfo from './FormItemInfo';

// Navigation after delay
const navigateDelay = 2000;

export default function NewReturnForm() {
  const history = useHistory();
  const { getTicketData } = useTicketContext();

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

    // Just get the file list's length
    let { ticketFile } = data;
    ticketFile = getFileLengthOnly(ticketFile);
    const modifiedData = { ...data, ticketFile };

    // Add files to firestore
    addNewTicket(modifiedData)
      .then((ticketId) => {
        // Get data on firestore and add into context
        getTicketData(ticketId);
        setFormStatus({ message: 'Talebiniz alındı. Yönlendiriliyorsunuz', status: 'success' });
        // Navigate to success page after 2s
        setTimeout(() => {
          history.replace(TICKET_SUCCESS);
        }, navigateDelay);
      })
      .catch((error) => {
        console.error(error);
        setFormStatus({ message: 'İşleminiz gerçekleştirilemedi. Tekrar deneyin', status: 'fail' });
        setButtonDisabled(false);
      });
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
