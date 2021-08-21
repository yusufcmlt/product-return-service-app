import React, { createContext, useContext } from 'react';

const TicketContext = createContext();

function useTicket() {
  return useContext(TicketContext);
}

function TicketProvider({ children }) {
  const value = {};

  return <TicketContext.Provider value={value}>{children}</TicketContext.Provider>;
}

export { useTicket, TicketProvider };
