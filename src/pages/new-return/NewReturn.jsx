import React from 'react';

import { TitleHeading } from 'components/headings/Headings';
import NewReturnForm from './components/new-return-form/NewReturnForm';

import './NewReturn.style.scss';

export default function NewReturn() {
  return (
    <section className="new-return-page" data-testid="app-new-return-page">
      <TitleHeading>Yeni bir iade süreci başlatın</TitleHeading>
      <NewReturnForm />
    </section>
  );
}
