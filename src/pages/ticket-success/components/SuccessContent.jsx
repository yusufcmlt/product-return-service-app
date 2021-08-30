import React from 'react';
import QRCode from 'react-qr-code';
import { TitleHeading, SubHeading } from 'components/headings/Headings';
import TicketDetailsCard from 'components/ticket-details-card/TicketDetailsCard';

import '../TicketSuccess.style.scss';

const qrDesktopSize = 160;

export default function SuccessContent({ data }) {
  const ticketLink = `${window.location.origin}/basvuru/${data?.id}`;

  return (
    <section className="ticket-success-page">
      <TitleHeading>İade süreciniz başlatıldı</TitleHeading>
      <SubHeading>İade süreciniz hakkındaki bilgiler:</SubHeading>
      <QRCode value={ticketLink || 'nothing to see here'} size={qrDesktopSize} />
      <TicketDetailsCard ticketData={{ ...data, ticketLink }} />
      <p className="ticket-success-page__link-text">
        İade durumunuz hakkındaki bilgilere link veya qr kod ile ulaşabilirsiniz.
      </p>
    </section>
  );
}
