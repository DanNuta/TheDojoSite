import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS1yxErbfYL3nbY36XpSxzIdQ2fRE6sDI",
  authDomain: "thedojosite-a6edf.firebaseapp.com",
  projectId: "thedojosite-a6edf",
  storageBucket: "thedojosite-a6edf.appspot.com",
  messagingSenderId: "929508714894",
  appId: "1:929508714894:web:4ac048f842fbed97851cdf",
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();
export const auth = app.auth();
