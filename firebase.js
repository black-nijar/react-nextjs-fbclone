import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlJtiaTbLtE1MG-BdctLDgno2h7r42jj8",
  authDomain: "facebookcl2021-a9e65.firebaseapp.com",
  projectId: "facebookcl2021-a9e65",
  storageBucket: "facebookcl2021-a9e65.appspot.com",
  messagingSenderId: "165678277603",
  appId: "1:165678277603:web:30b049e65255f6132376d6",
  measurementId: "G-XWSQE18KJG",
};

const app =
  firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
