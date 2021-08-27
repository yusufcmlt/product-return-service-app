import InfoText from 'components/info-text/InfoText';
import React from 'react';

export default function AdminTicketDetail({ data }) {
  const {
    id,
    ticketFirstName,
    ticketLastName,
    ticketItemCode,
    ticketIdNumber,
    ticketTelNumber,
    ticketAddress,
    ticketReason,
    ticketReasonDetail,
    ticketFile,
  } = data;

  return (
    <div className="dashboard__ticket-detail">
      <InfoText title="İade Kodu" detail={id} />
      <InfoText title="İade Nedeni" detail={ticketReason} />
      <InfoText title="İade Detayı" detail={ticketReasonDetail} />
      <InfoText title="Dosya" detail={`${Object.keys(ticketFile).length} Dosya`} />
      <InfoText title="Ürün kodu" detail={ticketItemCode} />
      <InfoText title="Ad Soyad" detail={`${ticketFirstName} ${ticketLastName}`} />
      <InfoText title="TC No" detail={ticketIdNumber} />
      <InfoText title="Telefon" detail={ticketTelNumber} />
      <InfoText title="Adres" detail={ticketAddress} />
    </div>
  );
}
