import React, { createContext, useContext, useState } from 'react';
import { getTicket } from 'services/firebase/firebaseUtils';
import { modifyTicketDataForDetail } from 'utils/ticket-data-utils/ticketDataUtils';

const TicketContext = createContext();

function useTicketContext() {
  return useContext(TicketContext);
}

function TicketProvider({ children }) {
  const [ticketData, setTicketData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const dataLoaded = () => {
    setLoading(false);
  };

  // If there is an ticket in context has and same id with given ticket id
  const checkTicketExistInContext = (ticketId) => {
    if (ticketData && ticketData.id === ticketId) {
      setLoading(false);
    }
  };

  const createTicketData = (data) => {
    // I am using modifyTicketDataForDetail for array of tickets
    // In order to use it with one data i am sending one ticket data inside of an array
    // Then getting mapped data's first element =>>> modified ticket
    const modifiedTicketData = modifyTicketDataForDetail([data]);
    setTicketData(modifiedTicketData[0]);
    dataLoaded();
  };

  const getTicketData = (id) => {
    // Get data from database if there is an id present and ticket is not
    if (id && !checkTicketExistInContext(id)) {
      getTicket(id).then((ticket) => {
        console.log(ticket);
        if (Object.keys(ticket).length) {
          createTicketData(ticket);
        } else {
          dataLoaded();
        }
      });
    }
  };
  const value = {
    ticketData,
    checkTicketExistInContext,
    isLoading,
    getTicketData,
    createTicketData,
    dataLoaded,
  };

  return <TicketContext.Provider value={value}>{children}</TicketContext.Provider>;
}

export { useTicketContext, TicketProvider };
