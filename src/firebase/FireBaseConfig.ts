import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2hLjJHVnu3MilKdc-Xj5Q0b2JEPirFvw",
  authDomain: "react-utn-cat-facts.firebaseapp.com",
  projectId: "react-utn-cat-facts",
  storageBucket: "react-utn-cat-facts.appspot.com",
  messagingSenderId: "777544989671",
  appId: "1:777544989671:web:1508edbfec6f96cce39b42",
  measurementId: "G-CDYBEFJBMP",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { db, googleAuthProvider, firebase };
