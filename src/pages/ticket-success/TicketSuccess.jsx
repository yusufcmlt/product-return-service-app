import { TitleHeading, SubHeading } from 'components/headings/Headings';
import { useTicketContext } from 'contexts/TicketContext';

import React from 'react';
import QRCode from 'react-qr-code';
import { Redirect } from 'react-router-dom';
import ProcessDetail from './components/ProcessDetail';

import './TicketSuccess.style.scss';

const qrDesktopSize = 160;

export default function TicketSuccess() {
  const { ticketData } = useTicketContext();
  const returnedItemLink = `${window.location.origin}/basvuru/${ticketData?.ticketDatabaseId}`;

  return (
    <>
      {ticketData ? (
        <section className="ticket-success-page">
          <TitleHeading>İade süreciniz başlatıldı</TitleHeading>
          <SubHeading>İade süreciniz hakkındaki bilgiler:</SubHeading>
          <QRCode value={returnedItemLink || 'nope'} size={qrDesktopSize} />
          <ProcessDetail data={ticketData} itemLink={returnedItemLink} />
          <p className="ticket-success-page__link-text">
            İade durumunuz hakkındaki bilgilere link veya qr kod ile ulaşabilirsiniz.
          </p>
        </section>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
