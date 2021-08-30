import React from 'react';

import { TitleHeading } from 'components/headings/Headings';
import NewTicketForm from './components/new-ticket-form/NewTicketForm';

import './NewTicket.style.scss';

export default function NewTicket() {
  return (
    <section className="new-return-page" data-testid="app-new-return-page">
      <TitleHeading>Yeni bir iade süreci başlatın</TitleHeading>
      <NewTicketForm />
    </section>
  );
}
