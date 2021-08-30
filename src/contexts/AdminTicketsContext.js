/* eslint-disable */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTicketsList } from 'services/firebase/firebaseUtils';

import {
  groupTicketsByKey,
  modifyTicketDataForDetail,
} from 'utils/ticket-data-utils/ticketDataUtils';

/**
 * Admin tickets context
 * Used only in private routes
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
  const createTicketList = () => {
    getTicketsList().then((ticketData) => {
      const groupedData = groupTicketsByKey(ticketData, 'ticketStatus');
      const detailData = modifyTicketDataForDetail(ticketData);

      setTicketList(detailData);
      setFilteredList(groupedData);
      setLoading(false);
    });
  };

  const deleteTicketList = () => {
    setTicketList('');
  };

  const changeSelectedStatus = (status) => {
    setSelectedStatus(status);
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
      createTicketList();
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
    createTicketList,
  };

  return <AdminTicketContext.Provider value={value}>{children}</AdminTicketContext.Provider>;
}

export { useAdminTicketContext, AdminTicketProvider };
