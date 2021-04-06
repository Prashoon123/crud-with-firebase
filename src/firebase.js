import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8OlvV19977QNf7TVnDqBxH9Dfb-MnUs0",
  authDomain: "crud-with-firebase-84e48.firebaseapp.com",
  projectId: "crud-with-firebase-84e48",
  storageBucket: "crud-with-firebase-84e48.appspot.com",
  messagingSenderId: "1010432355011",
  appId: "1:1010432355011:web:5b6470b6ef952ce3131076",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
