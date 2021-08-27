import React, { createContext, useContext, useState } from 'react';

const TicketContext = createContext();

function useTicketContext() {
  return useContext(TicketContext);
}

function TicketProvider({ children }) {
  const [ticketData, setTicketData] = useState('');

  const createTicket = (ticket = {}) => {
    setTicketData(ticket);
  };
  const checkTicketExistInContext = (ticketId) =>
    ticketData && ticketData.ticketDatabaseId === ticketId;

  const value = { ticketData, createTicket, checkTicketExistInContext };

  return <TicketContext.Provider value={value}>{children}</TicketContext.Provider>;
}

export { useTicketContext, TicketProvider };
