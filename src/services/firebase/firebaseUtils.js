import firebase from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

const ticketsRef = database.collection('tickets');
const usersRef = database.collection('users');

const addNewTicket = async (ticketData, successCall, errorCall) => {
  try {
    const docRef = await ticketsRef.add(ticketData);
    successCall(docRef.id);
  } catch (error) {
    errorCall(error);
  }
};

const checkTicketNumber = async (ticketId, foundCall, notFoundCall = () => {}) => {
  try {
    const ticketData = await ticketsRef.doc(ticketId).get();
    if (ticketData.exists) {
      foundCall(ticketData.data());
    } else {
      notFoundCall();
    }
  } catch (error) {
    notFoundCall(error);
  }
};

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

const getAdminTickets = (successCall) => {
  // Get admin tickets and send to context using successCall
  const adminTickets = [];

  // Admin tickets and id values
  ticketsRef
    .get()
    .then((ticketSnapshot) => {
      ticketSnapshot.forEach((ticketDoc) => {
        adminTickets.push({ id: ticketDoc.id, ...ticketDoc.data() });
      });
      successCall(adminTickets);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { addNewTicket, checkTicketNumber, adminLogin, getAdminTickets, database };
export default firebase;
