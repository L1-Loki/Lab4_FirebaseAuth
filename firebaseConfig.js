// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEOIJZCkiPrewd-tb0RvnnO76f9wdhvuY",
  authDomain: "rs-user.firebaseapp.com",
  projectId: "rs-user",
  storageBucket: "rs-user.appspot.com",
  messagingSenderId: "149566899354",
  appId: "1:149566899354:web:0be1426ac42007738b8b23",
  measurementId: "G-90YRGQBQC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);