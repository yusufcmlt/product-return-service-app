import React from 'react';
import { ticketStatusMessage } from 'utils/form-utils/formConstants';

import { TitleHeading, SubHeading } from 'components/headings/Headings';
import InfoText from 'components/info-text/InfoText';

export default function ResponseDetail({ data }) {
  const {
    ticketStatus,
    id,
    ticketFirstName,
    ticketLastName,
    ticketResponseMessage,
    ticketModifiedAt,
    ticketItemCode,
  } = data;

  return (
    <div className="ticket-response-page__response-detail">
      <TitleHeading>
        İade durumunuz:
        <span className={`ticket-status ticket-status--${ticketStatus}`}>
          {ticketStatusMessage[ticketStatus]}
        </span>
      </TitleHeading>
      <SubHeading>
        İade durumunuz hakkındaki son güncellemelere bu sayfadan ulaşabilirsiniz.
      </SubHeading>
      <div className="ticket-response-page__response-content">
        <InfoText title="İade Kodunuz" detail={id} />
        <InfoText title="Durum Mesajı" detail={ticketResponseMessage} />
        <InfoText title="Cevap Tarihi" detail={ticketModifiedAt.toDate().toLocaleDateString()} />
        <InfoText title="Ad Soyad" detail={`${ticketFirstName} ${ticketLastName}`} />
        <InfoText title="Ürün kodu" detail={ticketItemCode} />
      </div>
    </div>
  );
}
