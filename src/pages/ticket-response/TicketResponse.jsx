/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useTicketContext } from 'contexts/TicketContext';
import { checkTicketNumber } from 'services/firebase/firebaseUtils';

import { HOMEPAGE } from 'routes/RouteContstants';

import Loading from 'components/loading/Loading';
import ConditionWrapper from 'components/condition-wrapper/ConditionWrapper';
import TicketDetailsCard from 'components/ticket-details-card/TicketDetailsCard';

import './TicketResponse.style.scss';
import TicketResponseContent from './components/TicketResponseContent';

export default function TicketResponse() {
  const { id } = useParams();
  const { ticketData, isLoading, getTicketData } = useTicketContext();

  /**
   * Checking data order:
   * Check if there is an id, redirect to homepage if it is empty
   * If id present, check context
   * If context data is empty, check database and add ticket data to context
   * If database is empty too, redirect to homepage
   */

  // Checking on mount only
  useEffect(() => {
    getTicketData(id);
  }, []);

  return (
    <Loading isLoading={isLoading}>
      <ConditionWrapper
        condition={id && Object.keys(ticketData).length}
        componentTrue={<TicketResponseContent data={ticketData} />}
        componentFalse={<Redirect to={HOMEPAGE} />}
      />
    </Loading>
  );
}
