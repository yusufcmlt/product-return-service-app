import firebase from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

const ticketsRef = database.collection('tickets');
// const usersRef = database.collection("users");

const addNewTicket = async (ticketData, successCall, errorCall) => {
  try {
    const docRef = await ticketsRef.add(ticketData);
    successCall(docRef.id);
  } catch (error) {
    errorCall(error);
  }
};

export { addNewTicket, database };
export default firebase;
