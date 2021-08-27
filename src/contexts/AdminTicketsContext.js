/* eslint-disable */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAdminTickets } from 'services/firebase/firebaseUtils';

// Admin tickets context
// Using only in private routes

const AdminTicketContext = createContext();

function useAdminTicketContext() {
  return useContext(AdminTicketContext);
}

function AdminTicketProvider({ children }) {
  const [ticketList, setTicketList] = useState('');

  const createTicketList = (ticketData) => {
    setTicketList(ticketData);
  };
  const deleteTicketList = () => {
    setTicketList('');
  };
  const ticketListFail = (error) => {
    error && console.error(error);
  };

  useEffect(() => {
    if (!ticketList) {
      console.log(ticketList);
      getAdminTickets(createTicketList, ticketListFail);
    }
  }, []);

  const value = { ticketList };

  return <AdminTicketContext.Provider value={value}>{children}</AdminTicketContext.Provider>;
}

export { useAdminTicketContext, AdminTicketProvider };
