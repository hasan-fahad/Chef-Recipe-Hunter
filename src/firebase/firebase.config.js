// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFJgWP-tKKbY5P76ivPfvK3EwHgLWFtjA",
  authDomain: "chef-recipe-hunting-a01c9.firebaseapp.com",
  projectId: "chef-recipe-hunting-a01c9",
  storageBucket: "chef-recipe-hunting-a01c9.appspot.com",
  messagingSenderId: "653050182269",
  appId: "1:653050182269:web:c257673f63ba8968b74f14",
  measurementId: "G-YDMZYW79FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;