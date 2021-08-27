import React from 'react';
import InfoText from 'components/info-text/InfoText';
import { ticketFormReasonMessages } from 'utils/form-utils/formConstants';

export default function ProcessDetail({ data, itemLink }) {
  return (
    <div className="ticket-success-page__process-detail">
      <InfoText title="İade Kodu" detail={data.ticketDatabaseId} />
      <InfoText title="Link" detail={itemLink} />
      <InfoText title="Ad" detail={data.ticketFirstName} />
      <InfoText title="Soyad" detail={data.ticketLastName} />
      <InfoText title="Ürün Kodu" detail={data.ticketItemCode} />
      <InfoText title="İade Nedeni" detail={ticketFormReasonMessages[data.ticketReason]} />
      <InfoText title="İade Detayı" detail={data.ticketReasonDetail} />
      <InfoText title="İşlem Tarihi" detail={data.ticketCreatedAt.toLocaleDateString()} />
    </div>
  );
}
