/* eslint-disable */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAdminTickets } from 'services/firebase/firebaseUtils';

/**
 * Admin tickets context
 * Using only in private routes
 */
const AdminTicketContext = createContext();

function useAdminTicketContext() {
  return useContext(AdminTicketContext);
}

function AdminTicketProvider({ children }) {
  const [ticketList, setTicketList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [isLoading, setLoading] = useState(true);

  // Get ticket data from database
  const createTicketList = (ticketData) => {
    setTicketList(ticketData);
    filterTicketsByStatus(ticketData);
    setLoading(false);
  };

  // Function to call with buttons etc.
  const loadTickets = () => {
    // firestore
    getAdminTickets(createTicketList);
  };

  const deleteTicketList = () => {
    setTicketList('');
  };
  const changeSelectedStatus = (status) => {
    setSelectedStatus(status);
  };

  // Grouping data by ticket status
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

  // Get individual filter with id;
  const getIndividualTicket = (ticketId) => {
    if (ticketList.length) {
      return ticketList.find(({ id }) => id === ticketId);
    }
    return '';
  };

  // Get data on mount
  useEffect(() => {
    if (!ticketList.length) {
      loadTickets();
    }
    return () => {
      deleteTicketList();
    };
  }, []);

  const value = {
    ticketList,
    changeSelectedStatus,
    selectedStatus,
    filteredList,
    isLoading,
    getIndividualTicket,
    loadTickets,
  };

  return <AdminTicketContext.Provider value={value}>{children}</AdminTicketContext.Provider>;
}

export { useAdminTicketContext, AdminTicketProvider };
