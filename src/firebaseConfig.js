import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// config file
const firebaseConfig = {
  apiKey: "AIzaSyAzwh-wHiV5_XkxYjbSKmVu2hn_vyo0Yt4",
  authDomain: "clone-852e0.firebaseapp.com",
  projectId: "clone-852e0",
  storageBucket: "clone-852e0.appspot.com",
  messagingSenderId: "421785039121",
  appId: "1:421785039121:web:2cd3e0841c55850562dcb0",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
