import { ticketFormReasonMessages, ticketStatusMessage } from 'utils/form-utils/formConstants';

// Convert firebase date to string dates
const convertToJsDate = (firebaseDate, region = 'tr') =>
  firebaseDate.toDate().toLocaleDateString(region);

const modifyTicketDates = (ticketData) =>
  ticketData.map((ticket) => {
    let { ticketCreatedAt, ticketModifiedAt } = ticket;

    // Convert dates
    ticketCreatedAt = convertToJsDate(ticketCreatedAt);
    ticketModifiedAt = convertToJsDate(ticketModifiedAt);

    return { ...ticket, ticketModifiedAt, ticketCreatedAt };
  });

// Modify ticket data for detail cards
// Change select option values to actual messages
const modifyTicketDetailName = (ticketData) =>
  ticketData.map((ticket) => {
    let { ticketReason, ticketStatus } = ticket;

    ticketReason = ticketFormReasonMessages[ticketReason];
    ticketStatus = ticketStatusMessage[ticketStatus];

    return { ...ticket, ticketReason, ticketStatus };
  });

// Grouping data by ticket status
const groupTicketsByKey = (ticketList, key) => {
  if (ticketList) {
    return ticketList.reduce(
      (prevTickets, currentTickets) => ({
        ...prevTickets,
        [currentTickets[key]]: (prevTickets[currentTickets[key]] || []).concat(currentTickets),
      }),
      {}
    );
  }
  return '';
};

// Modify date and select option names
const modifyTicketDataForDetail = (ticketData) => {
  let ticketNewData = [...ticketData];

  ticketNewData = modifyTicketDates(ticketNewData);
  ticketNewData = modifyTicketDetailName(ticketNewData);

  return ticketNewData;
};

const getTicketStatusColor = (statusKey) => {
  const colorClass = Object.keys(ticketStatusMessage).find(
    (key) => ticketStatusMessage[key] === statusKey
  );
  return colorClass;
};

export { groupTicketsByKey, modifyTicketDates, modifyTicketDataForDetail, getTicketStatusColor };
