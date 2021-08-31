import firebase from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

const ticketsRef = database.collection('tickets');
const usersRef = database.collection('users');

const addNewTicket = (ticketData) => ticketsRef.add(ticketData).then((docRef) => docRef.id);

// Get ticket data with given id.
const getTicket = (ticketId) =>
  ticketsRef
    .doc(ticketId)
    .get()
    .then((ticketDoc) => {
      if (ticketDoc.exists) {
        return { id: ticketDoc.id, ...ticketDoc.data() };
      }
      return {};
    })
    .catch((error) => console.error(error));

// Check given login credentials for admin page
const adminLogin = async (adminCredentials, successCall, errorCall) => {
  // Get form user data
  const { adminUserName, adminPassword } = adminCredentials;

  try {
    // Get admin user data
    const adminRef = await usersRef.doc('admin-kodluyoruz').get();
    if (adminRef.exists) {
      // Get database user data
      const { userName, password } = adminRef.data();

      // Control sent form data with database
      const userNameCheck = adminUserName === userName;
      const passwordCheck = adminPassword === password;

      if (userNameCheck && passwordCheck) {
        successCall();
      } else {
        errorCall();
      }
    }
  } catch (error) {
    errorCall(error);
  }
};

const getTicketsList = () => {
  const ticketsList = [];

  // Get Tickets and order by modified date
  return ticketsRef
    .orderBy('ticketModifiedAt')
    .get()
    .then((ticketSnapshot) => {
      ticketSnapshot.forEach((ticketDoc) => {
        ticketsList.push({ id: ticketDoc.id, ...ticketDoc.data() });
      });
      return ticketsList;
    })
    .catch((error) => {
      console.error(error);
    });
};

const updateTicketInfo = (ticketId, ticketData, successCall) => {
  const { ticketStatus, ticketResponseMessage } = ticketData;

  const updatedTicketRef = ticketsRef.doc(ticketId);

  updatedTicketRef
    .update({
      ticketStatus,
      ticketResponseMessage,
      ticketModifiedAt: new Date(),
    })
    .then(() => {
      successCall();
    });
};

export { addNewTicket, getTicket, adminLogin, getTicketsList, updateTicketInfo, database };
export default firebase;
