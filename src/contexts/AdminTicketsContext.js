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
  const [filteredList, setFilteredList] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [isLoading, setLoading] = useState(true);

  // Get ticket data from database
  const createTicketList = (ticketData) => {
    setTicketList(ticketData);
    filterTicketsByStatus(ticketData);
    setLoading(false);
  };

  const loadTickets = () => {
    getAdminTickets(createTicketList);
  };

  const deleteTicketList = () => {
    setTicketList('');
  };
  const changeSelectedStatus = (status) => {
    setSelectedStatus(status);
  };
  // Filtering data by ticket's status
  const filterTicketsByStatus = (ticketArray) => {
    if (ticketArray) {
      const filteredList = ticketArray.reduce((prevTickets, currentTickets) => {
        const { ticketStatus } = currentTickets;
        return {
          ...prevTickets,
          [ticketStatus]: (prevTickets[ticketStatus] || []).concat(currentTickets),
        };
      }, {});
      setFilteredList(filteredList);
    }
  };

  useEffect(() => {
    loadTickets();
    return () => {
      deleteTicketList();
    };
  }, []);

  const value = { ticketList, changeSelectedStatus, selectedStatus, filteredList, isLoading };

  return <AdminTicketContext.Provider value={value}>{children}</AdminTicketContext.Provider>;
}

export { useAdminTicketContext, AdminTicketProvider };
