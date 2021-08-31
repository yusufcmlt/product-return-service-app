import React from 'react';
import { ticketDetailTitles } from 'utils/form-utils/formConstants';

import InfoText from 'components/info-text/InfoText';

export default function TicketDetailColumn({ infoArray, ticketData }) {
  return (
    <div className="ticket-detail-card__column">
      {infoArray.map((ticketInfo) => {
        if (ticketData[ticketInfo]) {
          const title = ticketDetailTitles[ticketInfo];
          const detail = ticketData[ticketInfo];
          return <InfoText key={`${ticketData.id}-${ticketInfo}`} title={title} detail={detail} />;
        }
        return '';
      })}
    </div>
  );
}
