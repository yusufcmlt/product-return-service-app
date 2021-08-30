import InfoText from 'components/info-text/InfoText';
import React from 'react';
import { ticketDetailTitles } from 'utils/form-utils/formConstants';

export default function TicketDetailsCard({ ticketData }) {
  console.log(ticketData);
  const dataArray = Object.keys(ticketData).sort();

  return (
    <div className="ticket-detail-card">
      {dataArray.map((ticketInfo) => {
        const title = ticketDetailTitles[ticketInfo];
        const detail = ticketData[ticketInfo];

        return <InfoText title={title} detail={detail} />;
      })}
    </div>
  );
}
