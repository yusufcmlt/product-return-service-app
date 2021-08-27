import React, { useState } from 'react';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { FormProvider, useForm } from 'react-hook-form';

import { searchFormDefaults } from 'utils/form-utils/formConstants';
import ticketSearchSchema from 'utils/form-utils/schemas/searchTicketSchema';

import Form from 'components/form/Form';
import Button from 'components/button/Button';
import { checkTicketNumber } from 'services/firebase/firebaseUtils';
import { useHistory } from 'react-router-dom';
import { PUBLIC_TICKET_ITEM } from 'routes/RouteContstants';
import { useTicketContext } from 'contexts/TicketContext';

const SearchForm = () => {
  const history = useHistory();
  const { createTicket } = useTicketContext();

  // react-hook-form and validations
  const resolver = useYupValidationResolver(ticketSearchSchema);
  const methods = useForm({
    resolver,
    mode: 'all',
    defaultValues: { searchFormDefaults },
  });

  // Error state
  const [isErrorShown, setErrorShown] = useState(false);

  const searchTicket = (data) => {
    const { ticketSearch } = data;
    // Add found ticket data to ticket context
    const onFound = (returnedTicketData) => {
      createTicket(returnedTicketData);
      history.replace(`${PUBLIC_TICKET_ITEM}/${ticketSearch}`);
    };
    const onNotFound = (error = '') => {
      console.error(error);
      setErrorShown(true);
    };

    checkTicketNumber(ticketSearch, onFound, onNotFound);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(searchTicket)}>
          <div className="check-ticket-page__search-box">
            <Form.TextInput id="ticketSearch" />
            <Form.StatusText isTextShown={isErrorShown} statusText="İade işlemi bulunamadı." />
            <Button isSubmit buttonText="İade Durum Sorgula" />
          </div>
        </Form>
      </FormProvider>
    </div>
  );
};

export default SearchForm;
