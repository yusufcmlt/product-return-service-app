import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { useTicketContext } from 'contexts/TicketContext';
import useYupValidationResolver from 'hooks/useYupValidationResolver';

import { getTicket } from 'services/firebase/firebaseUtils';
import ticketSearchSchema from 'utils/form-utils/schemas/searchTicketSchema';
import searchFormDefaults from 'utils/form-utils/defaults/searchFormDefaults';
import { PUBLIC_TICKET_ITEM } from 'routes/RouteContstants';

import Form from 'components/form/Form';
import Button from 'components/button/Button';

const SearchForm = () => {
  const history = useHistory();
  const { createTicketData } = useTicketContext();

  // react-hook-form and validations
  const resolver = useYupValidationResolver(ticketSearchSchema);
  const methods = useForm({
    resolver,
    mode: 'all',
    defaultValues: { searchFormDefaults },
  });

  // Error and button states
  const [isErrorShown, setErrorShown] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  /*
   * Search for ticket data in firestore database.
   *  Add ticket data to ticket context state
   *  Redirect user if successful
   *  Show error message if not
   */
  const searchTicket = (data) => {
    const { ticketSearch } = data;
    setButtonDisabled(true);
    getTicket(ticketSearch).then((ticket) => {
      if (Object.keys(ticket).length) {
        createTicketData(ticket);
        history.push(`${PUBLIC_TICKET_ITEM}/${ticketSearch}`);
      } else {
        setErrorShown(true);
        setButtonDisabled(false);
      }
    });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(searchTicket)}>
          <div className="check-ticket-page__search-box">
            <Form.TextInput id="ticketSearch" />
            <Form.StatusText isTextShown={isErrorShown} statusText="İade işlemi bulunamadı." />
            <Button isSubmit buttonText="İade Durum Sorgula" isDisabled={isButtonDisabled} />
          </div>
        </Form>
      </FormProvider>
    </div>
  );
};

export default SearchForm;
