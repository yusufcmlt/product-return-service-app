import React, { createContext, useContext, useState } from 'react';

const TicketContext = createContext();

function useTicket() {
  return useContext(TicketContext);
}

function TicketProvider({ children }) {
  const [ticketData, setTicketData] = useState({});

  const createTicket = (ticket = {}) => {
    setTicketData(ticket);
  };

  const value = { ticketData, createTicket };

  return <TicketContext.Provider value={value}>{children}</TicketContext.Provider>;
}

export { useTicket, TicketProvider };
