/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useTicketContext } from 'contexts/TicketContext';
import { checkTicketNumber } from 'services/firebase/firebaseUtils';

import { TitleHeading } from 'components/headings/Headings';
import ResponseDetail from './components/ResponseDetail';

import { HOMEPAGE } from 'routes/RouteContstants';

import './TicketResponse.style.scss';

export default function TicketResponse() {
  const { id } = useParams();
  const { checkTicketExistInContext, ticketData, createTicket } = useTicketContext();

  const [ticketLoadingStatus, setTicketLoadingStatus] = useState('loading');

  /**
   * Checking data order:
   * Check if there is an id, if is empty redirect to homepage
   * If id present, check context
   * If context data is empty, check database and add ticket data to context
   * If database is empty too, redirect to homepage
   */

  const foundTicketOnDatabase = (ticketResult) => {
    createTicket(ticketResult);
    setTicketLoadingStatus('loaded');
  };

  const notFoundTicketOnDataBase = (error = '') => {
    console.error(error);
    setTicketLoadingStatus('failed');
  };

  const checkTicketWithId = () => {
    // Context check
    if (checkTicketExistInContext(id)) {
      setTicketLoadingStatus('loaded');
    } else {
      // Firebase check
      checkTicketNumber(id, foundTicketOnDatabase, notFoundTicketOnDataBase);
    }
  };

  // Checking on mount only
  useEffect(() => {
    if (id) {
      checkTicketWithId();
    } else {
      setTicketLoadingStatus('failed');
    }
  }, []);

  return ticketLoadingStatus === 'loading' ? (
    <TitleHeading>Yükleniyor</TitleHeading>
  ) : ticketLoadingStatus === 'failed' ? (
    <Redirect to={HOMEPAGE} />
  ) : (
    <section className="ticket-response-page">
      <ResponseDetail data={{ id, ...ticketData }} />
    </section>
  );
}
