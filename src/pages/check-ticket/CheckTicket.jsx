import React from 'react';
import { SubHeading, TitleHeading } from 'components/headings/Headings';
import SearchForm from './components/SearchForm';

import './CheckTicket.style.scss';

export default function CheckTicket() {
  return (
    <section className="check-ticket-page">
      <TitleHeading>İade durumunuzu sorgulayın</TitleHeading>
      <SubHeading>İade işlemi başlattığınız ürünün durumunu sorgulayabilirsiniz.</SubHeading>
      <SearchForm />
    </section>
  );
}
