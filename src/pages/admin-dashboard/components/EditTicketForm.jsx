/* eslint-disable */
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useYupValidationResolver from 'hooks/useYupValidationResolver';

import Form from 'components/form/Form';
import Button from 'components/button/Button';

import { ticketStatusOptions, ticketUpdateFormDefaults } from 'utils/form-utils/formConstants';
import ticketUpdateFormSchema from 'utils/form-utils/schemas/ticketUpdateFormSchema';
import { useHistory } from 'react-router-dom';
import { ADMIN_TICKET_LIST } from 'routes/RouteContstants';
import { updateTicketInfo } from 'services/firebase/firebaseUtils';
import { useAdminTicketContext } from 'contexts/AdminTicketsContext';

export default function EditTicketForm({ id = '' }) {
  const { loadTickets } = useAdminTicketContext();

  const history = useHistory();

  const resolver = useYupValidationResolver(ticketUpdateFormSchema);
  const methods = useForm({
    resolver,
    mode: 'onChange',
    defaultValues: ticketUpdateFormDefaults,
  });
  const { handleSubmit, formState } = methods;
  const { errors, dirtyFields } = formState;

  const redirectAfterSubmit = () => {
    loadTickets();
    history.replace(ADMIN_TICKET_LIST);
  };

  const updateTicket = (data) => {
    updateTicketInfo(id, data, redirectAfterSubmit);
  };

  return (
    <div className="dashboard__edit-ticket">
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(updateTicket)}>
          <Form.Row labelForId="ticketStatus" labelText="Durumu Güncelle">
            <Form.Select id="ticketStatus" options={ticketStatusOptions} />
          </Form.Row>
          <Form.Row
            labelForId="ticketResponseMessage"
            labelText="Durum Mesajı"
            statusText={errors?.ticketResponseMessage?.message}
            isTextShown={!!dirtyFields.ticketResponseMessage || !!errors.ticketResponseMessage}
          >
            <Form.TextArea id="ticketResponseMessage" />
          </Form.Row>
          <Form.Row>
            <Button isSubmit buttonText="İade Durumunu Güncelle" />
          </Form.Row>
        </Form>
      </FormProvider>
    </div>
  );
}
